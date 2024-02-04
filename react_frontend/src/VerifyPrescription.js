import React, {useEffect, useState} from "react"
import './App.css';
import { Nav } from './components/NavBar.js'
import { TypeAheadDropdown } from './components/TypeaheadDropdown.js'

function VerifyPrescription() {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    const handleDivClick = () => {
        setIsVisible(true);
    };

    return (
        <div className="flex flex-col pb-12 bg-white">
            <Nav></Nav>

            <div className="flex flex-col items-center self-center mt-28 w-full max-w-[1653px] max-md:mt-10 max-md:max-w-full">
                <div className="text-5xl pt-20 font-semibold text-center text-black max-md:max-w-full max-md:text-4xl">
                    Enter the medication you wish to prescribe.
                </div>
                <div className="flex gap-5 justify-between self-stretch mt-16 pr-10 pl-10 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 justify-between px-16 py-2 text-3xl border-solid bg-white-100 border-[3px] border-neutral border-opacity-0 rounded-[30px] text-neutral-600 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                        <TypeAheadDropdown options={["Abacavir", "Abatacept", "Abciximab", "Abemaciclib", "Abiraterone", "Abrocitinib", "Acalabrutinib", "Acamprosate", "Acarbose", "Acebutolol", "Acepromazine", "Acetaminophen", "Acetanilide", "Acetazolamide", "Acetohexamide", "Acetylcarbromal", 
                        "Acetylcholine", "Acitretin","Aclidinium", "Aconiazide", "Acyclovir", "Adalimumab", "Adapalene", "Adefovir", "Adenosine", "Adrenocortical", "Abacavir", "Aflibercept", "Afoxolaner", "Agalsidase Alfa", "beta", "Albiglutide", "Aldesleukin", "Alectinib", "Alefacept", 
                        "Alemtuzumab", "Alendronic acid", "Alfacalcidol", "Alfuzosin", "Alglucosidase alfa", "Alirocumab", "Aliskiren", "Alitretinoin", "Alkyl nitrites", 
                        "Allopurinol", "Allylisopropylacetylurea", "Almotriptan", "Alogliptin", "Alpelisib", "Alpha-chloralose", "Alpha-hydroxy acids", "Alphadolone", "Alphaxalone", "Alteplase", "Tenecteplase", "Altrenogest", "Altretamine", "Amantadine", "Ambenonium Chloride", "Ambrisentan", "Amifampridine", 
                        "Amifostine", "Amikacin", "Amiloride", "Aminocaproic acid", "Aminoglutethimide", "Aminolevulinic acid", "Aminophylline", "Aminopterin", "Aminopyrine", "Amiodarone", "Dronedarone", "Amitraz", "Amitriptyline", "Amivantamab", "Amlexanox", "Amlodipine", "Ammonium bromide", "Amoxapine", "Amphotericin B", 
                        "Amprenavir", "Fosamprenavir", "Amprolium", "Amrinone", "Amsacrine", "Anagrelide", "Anakinra", "Anastrozole", "Ancestim", "Andexanet alfa", "Anidulafungin", "Anifrolumab", "Anti-thymocyte globulin", "Antipyrine", "Apalutamide", "Apixaban", "Apomorphine", "Apraclonidine", "Apramycin", 
                        "Apremilast", "Aprepitant", "Fosaprepitant", "Aprotinin", "Argatroban", "Aripiprazole", "Arsenic trioxide", "Asciminib", "Asenapine", "Asfotase alfa", "Asparaginase", "Astemizole", "Asunaprevir", "Atazanavir", "Atenolol", "Atezolizumab", "Atipamezole", "Atomoxetine", "Atorvastatin", "Atovaquone", 
                        "Atracurium besilate", "Atropine", "Avacopan", "Avalglucosidase alfa", "Avatrombopag", "Avelumab", "Avermectin", "Avilamycin", "Axicabtagene ciloleucel", "Axitinib", "Azacitidine", "Azacyclonol", "Azaribine", "Azathioprine", "Azatidine", "Azelaic acid", "Azelastine", "Azilsartan medoxomil", 
                        "Aztreonam", "Bacillus Calmette-Guérin", "Baclofen", "Baloxavir marboxil", "Bambuterol", "Bamlanivimab", "Baricitinib", "Basiliximab", "Bazedoxifene", "Becaplermin", "Belimumab", "Belinostat", "Belumosudil", "Belzutifan", "Bemegride", "Benactyzine", "Benazepril", "Bendamustine", "Bendazac", 
                        "Benoxaprofen", "Benralizumab", "Benserazide", "Benzoyl peroxide", "Benztropine", "Benzydamine", "Bepotastine", "Beractant", "Berotralstat", "Besifloxacin", "Betahistine", "Betaine", "Betaxolol", "Bethanechol chloride", "Bethanidine", "Bevacizumab", "Bezafibrate", "Bicalutamide", "Bictegravir", 
                        "Bilastine", "Bimekizumab", "Binimetinib", "Biperiden", "Bishydroxycoumarin", "Bisoprolol", "Bitolterol", "Bivalirudin", "Bleomycin", "Blinatumomab", "Boceprevir", "Bortezomib", "Bosentan", "Bosutinib", "Botulinum toxin", "Brentuximab Vedotin", "Bretylium tosylate", "Brexpiprazole", 
                        "Brexucabtagene autoleucel", "Brigatinib", "Brilliant Blue G", "Brimonidine", "Brivaracetam", "Brodalumab", "Brolucizumab", "Bromal", "Bromal hydrate", "Brometone", "Bromfenac", "Bromisoval", "Bromocriptine", "Bromoform", "Bumetanide", "Bupropion", "Burosumab", "Buserelin", "Buspirone", 
                        "Busulfan", "Butaperazine", "Butoconazole", "Butyl chloral hydrate", "Cabergoline", "Cabotegravir", "Cabozantinib", "Calaspargase pegol", "Calcifediol", "Calcipotriol", "Calcitonin", "Calcitriol", "Calcium bromide", "Calcium bromolactobionate", "Calcium carbimide", "Calcium salts", "Canagliflozin", 
                        "Canakinumab", "Candesartan", "Candicidin", "Cangrelor", "Caplacizumab", "Capmatinib", "Capreomycin", "Captodiamine", "Captopril", "Carbachol", "Carbamazepine", "Carbapenem salts", "Carbenoxolone", "Carbetocin", "Carbidopa", "Carbimazole", "Carbocisteine", "Carboplatin", "Carbromal", "Carfilzomib", 
                        "Carglumic acid", "Cariprazine", "Carisoprodol", "Carmustine", "Carphenazine", "Carprofen", "Carvedilol", "Casirivimab", "Caspofungin", "Catumaxomab", "Cedazuridine", "Celecoxib", "Cemiplimab", "Cenegermin", "Cenobamate", "Cephalosporin C", "Ceritinib", "Cerivastatin", "Cerliponase alfa", 
                        "Certolizumab pegol", "Cetrorelix", "Cetuximab", "Chloral", "Chloral hydrate", "Chloralformamide", "Chloralimide", "Chlorambucil", "Chloramphenicol", "Chlorcyclizine", "Chlorhexidine", "Chlorisondamine", "Chlormezanone", "Chloroquine", "Chlorothiazide", "Chlorpromazine", "Chlorpropamide", 
                        "Chlorprothixene", "Cholestyramine resin", "Choline salicylate", "Choline theophyllinate", "Dimercaprol", "Dimethyl sulfoxide", "Dimethylfumarate", "Dinutuximab", "Diphenidol or its salts", "Diphenylhydantoin (phenytoin) or its salts", "Dipivefrin or its salts", "Diprophylline or its salts", 
                        "Dipyridamole", "Dirithromycin", "Dirlotapide", "Disopyramide or its salts", "Disulfiram", "Dobutamine or its salts", "Docetaxel or its derivatives", "Cabazitaxel", "Dolasetron or its salts", "Dolutegravir or its salts", "Domperidone", "Donepezil or its salts", "Dopamine or its salts", "Doravirine", 
                        "Dornase alfa", "Dorzolamide or its salts", "Dostarlimab", "Doxacurium chloride", "Doxapram", "Doxazosin or its salts", "Doxepin or its salts", "Doxercalciferol or its derivatives", "Doxorubicin or its salts", "Doxycycline or its salts or derivatives", "Doxylamine or its salts", "Droperidol or its salts", 
                        "Drotrecogin", "Dulaglutide", "Duloxetine or its salts", "Dupilumab", "Durvalumab", "Dutasteride", "Econazole or its salts", "Ecothiophate or its salts", "Ectylurea or its salts", "Eculizumab", "Edaravone or its derivatives", "Edoxaban or its salts", "Edrophonium chloride", "Efalizumab", "Efavirenz", 
                        "Efgartigimod alfa", "Efinaconazole", "Eflornithine or its salts or derivatives", "Elagolix or its salts", "Elbasvir or its salts", "Eletriptan or its salts", "Elexacaftor or its salts", "Eliglustat or its salts", "Elosulfase alfa", "Elotuzumab", "Eltrombopag or its salts", "Eltrombopag olamine", 
                        "Eluxadoline or its salts", "Elvitegravir or its salts or derivatives", "Emamectin or its salts", "Emamectin benzoate", "Embutramide", "Emedastine or its salts", "Emicizumab", "Empagliflozin", "Emtricitabine", "Emylcamate", "Enalapril or its salts or derivatives", "Enalapril maleate", "Enasidenib or its salts", 
                        "Encorafenib or its salts", "Enflurane", "Enfortumab vedotin", "Enfuvirtide", "Enoxaparin or its salts", "Enrofloxacin", "Entacapone", "Entecavir", "Entrectinib or its salts", "Enzalutamide", "Epinephrine or its salts", "Epinephrine topical solution for hemostasis when sold at a concentration equal to or greater than 1 mg/ml (1:1000)", 
                        "Epirubicine or its salts", "Eplerenone", "Eprosartan or its salts or derivatives", "Epsiprantel", "Eptifibatide or its salts", "Eptinezumab", "Erdafitinib or its salts", "Erenumab", "Ergot alkaloids or their salts", "Eribulin or its salts or derivatives", "Eribulin mesylate", "Erlotinib or its salts", "Ertugliflozin or its derivatives", 
                        "Erythromycin or its salts or derivatives", "Azithromycin", "Clarithromycin", "Telithromycin", "Erythropoiesis stimulating hormone", "Erythropoietin", "Darbepoetin alpha", "Epoetin alfa", "Escitalopram or its salts", "Eslicarbazepine acetate", "Esmolol or its salts", "Esomeprazole or its salts", "Esomeprazole magnesium", 
                        "Estramustine or its salts", "Etanercept", "Ethacrynic acid", "Ethambutol or its salts", "Ethionamide or its salts", "Ethomoxane or its salts", "Ethotoin or its salts", "Ethyl trichloramate", "Etidronic acid or its salts", "Etofenamate", "Etonogestrel", "Etoposide or its salts", "Etravirine", "Eucalyptol or its salts", 
                        "Eucatropine or its salts", "Eucatropine hydrochloride", "Eucatropine nitrate", "Eucatropine salicylate", "Eucatropine sulfate", "Eucatropine tannate", "Eugesterone or its salts", "Eupatorin or its salts", "Eupatorin salts", "Eupaverin or its salts", "Eupaverin hydrochloride", "Eupaverin iodide", "Eupaverin sulfate", "Eupaverin tartrate", 
                        "Eupaverin tincture", "Eupaverin valerate", "Eupental or its salts", "Eupentol or its salts", "Eupentol tartrate", "Eupentylnitrate", "Eupentylnitrate hydrochloride", "Eupentylnitrate sulfate", "Eupentylnitrate tartrate", "Eupenylnitrate", "Eupenylnitrate hydrochloride", "Eupenylnitrate sulfate", "Eupenylnitrate tartrate", "Eupental or its salts",
                        "Eupental tartrate", "Eupental nitrate", "Eupental hydrochloride", "Eupental sulfate", "Eupental tartrate", "Eupental valerate"]} onSelect={handleOptionSelect}/>
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5700307fde7b6a8fd02bde92bdf9917f5ceb761ece261302043412cabcc40d10?apiKey=d4725d47a8514f52916d5a74d4e7c8ac&"
                        className="self-start aspect-[2.17] fill-neutral-500 w-[67px] mt-4"
                        />
                    </div>
                    <button onClick={handleDivClick} disabled={!selectedOption} className="justify-center items-center px-16 py-6 text-4xl font-semibold text-center text-white whitespace-nowrap bg-blue-500 border-solid border-[3px] border-white border-opacity-0 rounded-[30px] max-md:px-5">
                        Search
                    </button>
                </div>
                {isVisible && <div className="mt-28 w-full max-w-[1395px] max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow px-5 max-md:mt-10">
                            <div className="flex justify-center items-center self-center px-16 py-12 max-w-full rounded-full stroke-[11px] w-[214px] max-md:px-5">
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/70d57679628d7a7ec9ef880d355ba51ae1c06cdf281bb197b1b417f8c1bb5c46?apiKey=d4725d47a8514f52916d5a74d4e7c8ac&"
                                className="my-4 w-full aspect-[1.14] fill-red-500"
                                />
                            </div>
                            <div className="mt-8 text-3xl font-semibold text-center text-blue-500">
                                Recommended alternate:
                                <br />
                                <span className="text-4xl text-blue-500">Molnupiravir</span>
                            </div>
                            <div className="justify-center px-9 py-1 mt-12 text-3xl font-medium text-center text-white bg-blue-500 border-solid border-[3px] border-white border-opacity-0 rounded-[30px] max-md:px-5 max-md:mt-10">
                                Prescribe this instead.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col px-5 mt-14 text-center max-md:mt-10 max-md:max-w-full">
                            <div className="self-center text-5xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
                                Not recommended for use
                            </div>
                            <div className="mt-11 text-3xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                                Taking Paxlovid and Rifampin together can have serious
                                consequences on the body, especially when taken within two weeks
                                of each other. Combining these medications can significantly
                                reduce the patient’s blood levels and can reduce the effects of
                                a Paxlovid.
                                <br />
                                <br />
                                Paxlovid can also result in a shortness of breath as a side
                                effect. And is thus not recommended for this patient.
                            </div>
                        </div>
                    </div>
                </div>
                </div>}
                {isVisible && <div className="justify-center items-center px-16 py-1 mt-40 max-w-full text-3xl font-medium text-center text-white bg-blue-500 border-solid border-[3px] border-white border-opacity-0 rounded-[30px] w-[659px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        Continue with chosen medication.
                </div>}
            </div>
        </div>
    );
};

export default VerifyPrescription;