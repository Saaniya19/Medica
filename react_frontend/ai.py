#Note: The openai-python library support for Azure OpenAI is in preview.
import os
from openai import AzureOpenAI

client = AzureOpenAI(azure_endpoint="https://medica.openai.azure.com/",
api_version="2023-09-15-preview",
api_key = '223849ccf7d6427c965d9d4503b91291')
#api_key=os.getenv("223849ccf7d6427c965d9d4503b91291"))

def ask():
  response = client.completions.create(model="MedicaAI",
  prompt=("Provide a description of the drug-drug interactions between the following pairs of medications to determine if it is safe for a patient to take these medications toegether. \n\nQ: Is it safe for a patient to take Rifampin and Acetaminophen at the same time?\nA:"),
  temperature=0,
  max_tokens=256,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0,
  stop=["\n"])
  return response.choices[0].text