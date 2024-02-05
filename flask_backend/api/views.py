from flask import Blueprint, jsonify, request
import random
from .models import Patient
from . import db
import string
import requests
from sqlalchemy import desc
import json
import urllib.request
from datetime import datetime, timedelta
import apscheduler
from apscheduler.schedulers.background import BackgroundScheduler
from pytz import timezone


# api_key = 'OTKHLLKZ9SXFZUHP'
# api_key = 'DNWQMLFC43J1PHDI'


main = Blueprint('main', __name__)

@main.route('/add_patient', methods=['POST'])
def add_patient():
    request_data = request.json
    name = request_data['name']
    email = request_data['email']
    comments = request_data['comments']
    age = request_data['age']
    sex = request_data['sex']
    address = request_data['address']

    new_patient = Patient(name, email, comments, age, sex, address)

    db.session.add(new_patient)
    db.session.commit()

    return jsonify({'patient added'})


@main.route('/get_patients', methods = ['GET'])

def get_patients():

    patient_list = Patient.query.all()

    patients = []

    for patient in patient_list:
        patients.append({'name': patient.name, 'email': patient.email, 'comments': patient.comments, 'age':patient.age, 'sex': patient.sex, 'address': patient.address})

    return jsonify({'patients':patients})



@main.route('/delete_patient', methods=['DELETE'])

def delete_patient():

    patient_id = request.json['selected_patient']

    row = Patient.query.filter_by(id=patient_id)

    # note: this does not account for the medication-patient matching table yet

    db.session.delete(row)

    db.session.commit()

    return jsonify({'message': 'Patient deleted successfully'})
   


@main.route('/add_data', methods=['POST'])
def add_data():

    request_data = request.json
    name_data = request_data['query'].upper()
    amount_data = int(request_data['amount'])

    portfolio = Portfolio_Log.query.order_by(desc(Portfolio_Log.time)).first()

    url = f'https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol={name_data}&apikey={api_key}'
    response = requests.get(url)
    data = response.json()

    if data['Global Quote'] and amount_data is not None and portfolio:

        stock_data = data['Global Quote']

        current_price = float(stock_data['05. price']) + 0.00

        previous_close = float(stock_data['08. previous close'])

        change = current_price - previous_close

        percent_change = (change / previous_close) * 100

        price_bought_at = current_price

        average_price = current_price

        value = average_price * amount_data

        new_stock = Stock(name = name_data, price = current_price, prev_price=previous_close, change=change, percent_change=percent_change, amount=amount_data, price_bought_at=price_bought_at, average_price=average_price, value=value, date_updated = datetime.now(timezone('EST')).date())
        
        #adding to portfolio db
        new_value = portfolio.value + value

        new_portfolio_log = Portfolio_Log(value=new_value, initial_value=new_value, change=portfolio.change, percent_change=portfolio.percent_change)


        db.session.add(new_stock)
        db.session.add(new_portfolio_log)
        db.session.commit()

        return jsonify({'ok'})

    else:
        return jsonify({'not ok'})
    




@main.route('/get_data', methods = ['GET'])

def get_data():

    stock_list = Stock.query.order_by(Stock.id).all()

    stocks = []

    for stock in stock_list:
        stocks.append({'name': stock.name, 'price': stock.price, 'prev_price': stock.prev_price, 'change':stock.change, 'percent_change': stock.percent_change, 'amount': stock.amount, 'price_bought_at': stock.price_bought_at, 'average_price': stock.average_price, 'value':stock.value})

    return jsonify({'stocks':stocks})







