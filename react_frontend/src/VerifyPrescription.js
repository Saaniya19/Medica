import React, {useEffect, useState} from "react"
import './App.css';
import { Nav } from './components/NavBar.js'
import { TypeAheadDropdown } from './components/TypeaheadDropdown.js'
import { Link } from 'react-router-dom'


export const VerifyPrescription = ({}) => {

    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };
    const handleDivClick = () => {
        setIsVisible(true);
    };
    const [response, setResponse] = useState('');
    const [responseFromAsk, setResponseFromAsk] = useState(''); // Initialize with an empty string

    useEffect(() => {
        fetch('/ask', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ selectedOption }),
        })
        .then(response => response.json())
        .then(data => {
            const responseFromAsk = data.responseFromAsk;
            setResponseFromAsk(responseFromAsk);
            console.log(responseFromAsk)
            // console.log(data);
            // setResponse(data);
        })
        .catch(error => {
        });
    }, [selectedOption]);

    
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
                        "Chlorprothixene", "Cholestyramine resin", "Choline salicylate", "Choline theophyllinate", "Dimercaprol", "Dimethyl sulfoxide", "Dimethylfumarate", "Dinutuximab", "Diphenidol", "Diphenylhydantoin (phenytoin)", "Dipivefrin", "Diprophylline", 
                        "Dipyridamole", "Dirithromycin", "Dirlotapide", "Disopyramide", "Disulfiram", "Dobutamine", "Docetaxel", "Cabazitaxel", "Dolasetron", "Dolutegravir", "Domperidone", "Donepezil", "Dopamine", "Doravirine", 
                        "Dornase alfa", "Dorzolamide", "Dostarlimab", "Doxacurium chloride", "Doxapram", "Doxazosin", "Doxepin", "Doxercalciferol", "Doxorubicin", "Doxycycline ", "Doxylamine", "Droperidol", 
                        "Drotrecogin", "Dulaglutide", "Duloxetine", "Dupilumab", "Durvalumab", "Dutasteride", "Econazole", "Ecothiophate", "Ectylurea", "Eculizumab", "Edaravone", "Edoxaban", "Edrophonium chloride", "Efalizumab", "Efavirenz", 
                        "Efgartigimod alfa", "Efinaconazole", "Eflornithine ", "Elagolix", "Elbasvir", "Eletriptan", "Elexacaftor", "Eliglustat", "Elosulfase alfa", "Elotuzumab", "Eltrombopag", "Eltrombopag olamine", 
                        "Eluxadoline", "Elvitegravir ", "Emamectin", "Emamectin benzoate", "Embutramide", "Emedastine", "Emicizumab", "Empagliflozin", "Emtricitabine", "Emylcamate", "Enalapril ", "Enalapril maleate", "Enasidenib", 
                        "Encorafenib", "Enflurane", "Enfortumab vedotin", "Enfuvirtide", "Enoxaparin", "Enrofloxacin", "Entacapone", "Entecavir", "Entrectinib", "Enzalutamide", "Epinephrine", "Epinephrine topical solution for hemostasis when sold at a concentration equal to or greater than 1 mg/ml (1:1000)", 
                        "Epirubicine", "Eplerenone", "Eprosartan ", "Epsiprantel", "Eptifibatide", "Eptinezumab", "Erdafitinib", "Erenumab", "Ergot alkaloids or their salts", "Eribulin ", "Eribulin mesylate", "Erlotinib", "Ertugliflozin", 
                        "Erythromycin ", "Azithromycin", "Clarithromycin", "Telithromycin", "Erythropoiesis stimulating hormone", "Erythropoietin", "Darbepoetin alpha", "Epoetin alfa", "Escitalopram", "Eslicarbazepine acetate", "Esmolol", "Esomeprazole", "Esomeprazole magnesium", 
                        "Estramustine", "Etanercept", "Ethacrynic acid", "Ethambutol", "Ethionamide", "Ethomoxane", "Ethotoin", "Ethyl trichloramate", "Etidronic acid", "Etodolac", "Etomidate", "Etoposide", "Etravirine", "Etretinate", "Etymemazine", "Evinacumab", "Evolocumab", "Exemestane", "Exenatide", 
                        "Ezetimibe", "Ezogabine", "Famciclovir", "Famotidine", "Fampridine", "Faricimab", "Febuxostat", "Fedratinib", "Felodipine", "Fenfluramine", "Fenofibrate", "Fenoprofen", "Fenoterol", "Fesoterodine", "Fidaxomicin", "Filgrastim", "Finafloxacin", "Finasteride", "Finerenone", "Fingolimod", 
                        "Firocoxib", "Flavoxate", "Flecainide", "Fleroxacin", "Flibanserin", "Floctafenine", "Florfenicol", "Fluconazole", "Flucytosine", "Fludarabine", "Flunarizine", "Flunixin", "Fluorouracil", "Fluoxetine", "Flupentixol", "Fluphenazine", "Fluralaner", "Flurbiprofen", "Fluspirilene", "Flutamide", 
                        "Fluvastatin", "Fluvoxamine", "Folic acid", "Follicle stimulating hormone", "Fomepizole", "Fondaparinux sodium", "Formestane", "Formoterol", "Foscarbidopa", "Foscarnet sodium", "Fosfomycin", "Fosinopril", "Foslevodopa", "Fosphenytoin", "Fostamatinib", "Fostemsavir", "Framycetin", 
                        "Fremanezumab", "Frovatriptan", "Fulvestrant", "Furaltadone", "Furazolidone", "Furosemide", "Fusidic acid", "Gabapentin", "Galantamine", "Galcanezumab", "Gallamine triethiodide", "Gallium", "Galsulfase", "Ganciclovir", "Ganirelix", "Gatifloxacin", "Gefitinib", "Gemcitabine", "Gemfibrozil", 
                        "Gemifloxacin", "Gemtuzumab ozogamicin", "Gentamicin", "Gilteritinib", "Givosiran", "Glasdegib", "Glatiramer", "Glecaprevir", "Gliclazide", "Glimepiride", "Glipizide", "Glofitamab", "Glyburide", "Glycopyrronium bromide", "Gold", "Golimumab", "Gonadorelin", "Gonadotropin, chorionic (human)", 
                        "Gonadotropins, serum (human)", "Goserelin", "Granisetron", "Grazoprevir", "Grepafloxacin", "Griseofulvin", "Guanethidine", "Guanfacine", "Guselkumab", "Halofantrine", "Haloperidol", "Halothane", "Hemin", "Hetastarch", "Hexachlorophene", "Hexacyclonate sodium", "Hexamethonium", "Histrelin", 
                        "Hydralazine", "Hydroquinone", "Hydroxocobalamin", "Hydroxychloroquine", "Hydroxyurea", "Hydroxyzine", "Hyoscine butylbromide", "Ibafloxacin", "Ibandronic acid", "Ibogaine", "Ibrutinib", "Ibuprofen", "Ibutilide", "Icatibant", "Icosapent ethyl", "Idarubicin", "Idarucizumab", "Idebenone", 
                        "Idecabtagene vicleucel", "Idelalisib", "Idoxuridine", "Idursulfase", "Ifosfamide", "Imatinib", "Imdevimab", "Imidapril", "Imiglucerase", "Imipramine", "Imiquimod", "Immunogenic substances", "Inclisiran", "Indacaterol", "Indapamide", "Indinavir", "Indomethacin", "Infigratinib", "Infliximab", 
                        "Ingenol mebutate", "Inhaled human insulin", "Inosiplex", "Inotersen", "Inotuzumab ozogamicin", "Interferon", "Iodochlorohydroxyquin", "Ipilimumab", "Ipratropium", "Iproniazid", "Irbesartan", "Irinotecan", "Iron derivatives", "Isatuximab", "Isavuconazole", "Isocarboxazid", "Isoflurane", 
                        "Isoniazid", "Isoproterenol", "Isotretinoin", "Isoxsuprine", "Isradipine", "Itraconazole", "Ivabradine", "Ivacaftor", "Ixazomib", "Ixekizumab", "Kanamycin", "Ketanserin", "Ketoconazole", "Ketoprofene", "Ketorolac", "Ketotifen", "L-Tryptophan", "Labetalol", "Lacosamide", "Lactic acid", 
                        "Lamivudine", "Lamotrigine", "Lanadelumab", "Lanreotide", "Lansoprazole", "Lanthanum salts", "Lapatinib", "Laronidase", "Larotrectinib", "Ledipasvir", "Lefamulin", "Leflunomide ", "Teriflunomide", "Lemborexant", "Lenacapavir", 
                        "Lenalidomide", "Lenvatinib", "Letermovir", "Letrozole", "Leucovorin", "Leuprolide", "Levamisole", "Levetiracetam", "Levobunolol", "Levocabastine ", "Levocarnitine ", 
                        "Levodopa", "Levomilnacipran", "Lidocaine", "Lifitegrast", "Linaclotide ", "Linagliptin ", "Lincomycin ", "Clindamycin", "Linezolid", "Liothyronine", 
                        "Liraglutide", "Lisinopril ", "Lithium", "Lixisenatide", "Lodoxamide ", "Lodoxamide tromethamine", "Lomefloxacin", "Lomitapide", "Lomustine", "Lopinavir", "Lorlatinib", 
                        "Losartan", "Losoxantrone", "Lovastatin", "Loxapine", "Lumacaftor ", "Lumasiran", "Lumiracoxib", "Lurasidone", "Lurbinectedin ", "Luspatercept", "Lutropin alfa", 
                        "Macitentan", "Magnesium glutamate hydrobromide", "Mannitol", "Maprotiline", "Maralixibat", "Maraviroc", "Marbofloxacin ", "Maribavir", "Maropitant", "Mavacamten", "Mebendazole", 
                        "Mecamylamine", "Mecasermin", "Mechlorethamine", "Meclizine", "Meclofenamic acid", "Medetomidine", "Mefenamic acid", "Mefloquine ", "Megestrol", "Melanoma therapeutic vaccine", 
                        "Melarsomine", "Meloxicam ", "Melphalan", "Memantine", "Menotropins (human)", "Mepacrine", "Mepazine", "Mephenoxalone", "Mephentermine", "Mepolizumab", "Mercaptopurine", "Mesna", "Mesoridazine", 
                        "Metaldehyde", "Metformin ", "Methacholine chloride", "Methazolamide", "Methimazole", "Methisazone", "Methoin (Mephenytoin)", "Methotrexate", "Methotrimeprazine", "Methoxamine", "Methoxsalen", 
                        "Methoxy polyethylene glycol-epoetin beta", "Methoxyflurane", "Methyldopa", "Methylnaltrexone", "Methylnaltrexone bromide", "Methylparafynol", "Methysergide ", "Metoclopramide", "Metolazone", "Metomidate", 
                        "Metopimazine", "Metoprolol", "Metronidazole", "Metyrapone", "Mexiletine", "Micafungin", "Miconazole", "Midodrine", "Midostaurin", "Mifepristone", "Migalastat", "Miglustat", 
                        "Milbemycin", "Moxidectin", "Milrinone", "Minoxidil", "Mirabegron", "Mirikizumab", "Mirtazapine", "Mitomycin", "Mitotane", "Mitoxantrone", "Mitratapide", "Mivacurium chloride", "Moclobemide ", 
                        "Modafinil", "Mogamulizumab", "Molgramostim", "Montelukast", "Moxifloxacin ", "Muromonab-CD3", "Mycophenolic acid ", "Mycophenolate mofetil", "Nabumetone", "Nadolol", "Nadroparin", 
                        "Nafarelin ", "Nafarelin acetate", "Nalidixic acid", "Nalmefene", "Naloxegol", "Naloxegol oxalate", "Naloxone", "Naloxone hydrochloride", "Naltrexone ", "Naproxen", "Naproxen sodium", 
                        "Naratriptan", "Natalizumab", "Nateglinide ", "Nebivolol ", "Necitumumab", "Nedocromil", "Nefazodone", "Nelarabine", "Nelfinavir", "Neocinchophen", "Neomycin", 
                        "Paromomycin sulfate", "Neostigmine salts", "Nepafenac", "Neratinib", "Nesiritide", "Netupitant", "Nevirapine", "Nialamide", "Nicarbazin", "Nicardipine", "Nicotine", 
                        "Nicotinic acid", "Nifedipine", "Nilotinib", "Nilutamide", "Nimodipine", "Nintedanib", "Niraparib", "Nirmatrelvir", "Nitisinone", "Nitric oxide", "Nitrofurantoin", "Nitroscanate", "Nivolumab", 
                        "Nizatidine", "Nomifensine", "Norfloxacin", "Nortriptyline", "Novobiocin", "Nusinersen", "Nylidrin", "Nystatin", "Obeticholic acid", "Obiltoxaximab", 
                        "Obinutuzumab", "Oclacitinib", "Oclacitinib maleate", "Ocrelizumab", "Ocriplasmin", "Octatropine methylbromide", "Octreotide", "Odevixibat", "Ofatumumab", "Ofloxacin", "Levofloxacin", "Olanzapine", "Olaparib", "Olaratumab", 
                        "Oleandomycin", "Olmesartan", "Olmesartan medoxmil", "Olodaterol", "Olopatadine", "Olsalazine", "Omalizumab", "Ombitasvir", "Omeprazole", "Omeprazole magnesium", 
                        "Onasemnogene abeparvovec", "Ondansetron", "Orbifloxacin", "Orciprenaline (Metaproterenol)", "Orlistat", "Ormetoprim", "Ornidazole", "Oseltamivir", "Osimertinib", "Ospemifene", 
                        "Oxaliplatin", "Oxanamide", "Oxaprozin", "Oxcarbazepine", "Oxolinic acid", "Oxprenolol", "Oxybutynin", "Oxyphenbutazone", "Oxytocin", "Ozanimod", "Ozenoxacin", 
                        "Paclitaxel", "Palbociclib", "Palifermin", "Paliperidone", "Palivizumab", "Palonosetron", "Palonosetron hydrochloride", "Palovarotene", "Pamidronic acid", "Pancreatic extracts", 
                        "Pancreatin", "Pancrelipase", "Pancuronium", "Panitumumab", "Pantoprazole", "Paraldehyde", "Paramethadione", "Pargyline", "Paricalcitol", "Paritaprevir(Veruprevir)", "Paroxetine", "Pasireotide", 
                        "Patiromer sorbitex calcium", "Patisiran", "Pazopanib", "Pegaptanib", "Pegaspargase", "Pegcetacoplan", "Pegfilgrastim", "Pegvaliase", "Pegvisomant", "Pembrolizumab", "Pemetrexed", "Pemigatinib", 
                        "Penciclovir", "Penicillamine", "Penicillin", "Solifenacin", "Somatropin", "Somatostatin", "Spinosyn A and D isoforms", "Stiripentol", "Streptomycin", "Succinimide", "Sulfinpyrazone", 
                        "Sulindac", "Sumatriptan", "Sunitinib", "Suprofen", "Suvorexant", "Tacrolimus", "Tadalafil", "Tafamidis", "Tafasitamab", "Talazoparib", "Taliglucerase alfa", "Tamoxifen", 
                        "Tamsulosin", "Tazarotene", "Tazobactam", "Tebentafusp", "Teclistamab", "Tecovirimat", "Tedizolid", "Teduglutide", "Teflubenzuron", "Tegaserod", "Telaprevir", "Telbivudine", "Telmisartan", "Telotristat", 
                        "Temozolomide", "Tenapanor", "Teniposide", "Tenofovir", "Tenoxicam", "Tepotinib", "Tepoxalin", "Terazosin", "Terbinafine", "Terbutaline", "Terconazole", "Terfenadine", "Teriparatide", 
                        "Terlipressin", "Tesamorelin", "Tetrabenazine", "Tetracaine", "Tetracycline", "Tezacaftor", "Tezepelumab", "Thalidomide", "Theophylline", "Thiabendazole", "Thiethylperazine", "Thiocarlide", "Thioguanine", "Thiopropazate", 
                        "Thioproperazine", "Thioridazine", "Thiotepa", "Thiothixene", "Thiouracil", "Thyroid", "Thyrotropin alfa", "Thyroxin", "Tiaprofenic acid", "Ticagrelor", "Ticlopidine", "Tigecycline", "Tildrakizumab", "Tiludronic acid", "Timolol", 
                        "Tinidazole", "Tinzaparin", "Tioconazole", "Tiotropium bromide", "Tipiracil", "Tipranavir", "Tirbanibulin", "Tirofiban", "Tirzepatide", "Tisagenlecleucel", "Tixagevimab", "Tizanidine", "Tobramycin", "Tocainide", "Toceranib", 
                        "Tocilizumab", "Tofacitinib", "Tolazamide", "Tolazoline", "Tolbutamide", "Tolcapone", "Tolfenamic acid", "Tolmetin", "Tolterodine", "Toltrazuril", "Tolvaptan", "Topiramate", "Topotecan", "Torasemide", "Toremifene", 
                        "Trabectedin", "Tralokinumab", "Trametinib", "Trandolapril", "Tranexamic acid", "Tranylcypromine", "Trastuzumab", "Trastuzumab deruxtecan", "Trastuzumab emtansine", "Trazodone", "Tremelimumab", "Treosulfan", "Tretamine", "Tretinoin", 
                        "Treprostinil", "Tretinoin", "Triamcinolone", "Triamterene", "Triazolam", "Tribenoside", "Tributol", "Trientine", "Trientine", "Triethylperazine", "Trifluperidol", 
                        "Trifluridine", "Trifunctional bispecific antibody targeting BCMA and CD3", "Triflusal", "Triglycidyl isocyanurate", "Trimebutine", "Trimethadione", "Trimethobenzamide", "Trimethoprim", "Trimetrexate", "Trimipramine", "Triptorelin", 
                        "Troleandomycin", "Tropisetron", "Trovafloxacin", "Tuberculin", "Tulathromycin", "Tulobuterol", "Turoctocog alfa", "Ulipristal", "Umeclidinium bromide", "Urapidil", "Urea", "Urease", "Urethane", 
                        "Uricase", "Uricosuric agent", "Ursodeoxycholic acid", "Ustekinumab", "Vaborbactam", "Vaccines", "Valaciclovir", "Valdecoxib", "Valganciclovir", "Valine", "Valproic acid", "Valsartan", "Vancomycin", 
                        "Vandetanib", "Vaniprevir", "Vapreotide", "Varenicline", "Vatalanib", "Vedolizumab", "Venetoclax", "Verapamil", "Vernakalant", "Vervain", "Vestronidase alfa", "Vidarabine", "Vilanterol trifenatate", "Vildagliptin", 
                        "Vinblastine", "Vincristine", "Vindesine", "Vinflunine", "Vinpocetine", "Vinyl resin", "Violarite", "Vismodegib", "Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D", "Vitamin E", "Vitamin K", 
                        "Vitamin K antagonists", "Vitamin K antagonist antidote", "Voglibose", "Vonoprazan", "Vorapaxar", "Voriconazole", "Vortioxetine", "Warfarin", "Xanthophyll", "Xenon", "Xerophthalmia", "Xifaxan", "Ximelagatran", 
                        "Xipamide", "Xylose", "Yohimbine", "Zafirlukast", "Zaleplon", "Zanamivir", "Zanubrutinib", "Ziconotide", "Zidovudine", "Zinc", "Zinc acetate", "Zinc gluconate", "Zinc oxide", "Zinc oxide-eugenol cement", "Zinc stearate", 
                        "Zinc sulfate", "Ziprasidone", "Zoledronic acid", "Zolmitriptan", "Zolpidem", "Zonisamide", "Zopiclone", "Zorubicin", "Zotarolimus", "Zuclopenthixol", "Zuclopenthixol decanoate", 
                        "Zuranolone", "Zuclomiphene", "Zydis technology", "Zyklon B", "Pyridostigmine bromide", "Pyrimethamine", "Quetiapine", "Quinagolide", "Quinapril", "Quinine", "Quinupristin", "Rabeprazole", "Raloxifene", "Raltegravir", 
                        "Raltitrexed", "Ramipril", "Ramucirumab", "Ranibizumab", "Ranitidine", "Ranolazine", "Rasagiline", "Rasburicase", "Raubasine", "Rauwolfia", "Ravulizumab", "Regorafenib", "Relatlimab", "Relugolix", "Remdesivir", "Remestemcel-L", "Remoxipride", 
                        "Repaglinide", "Rescinnamine", "Reserpine", "Reslizumab", "Resocortol", "Retapamulin", "Reviparin", "Ribavirin", "Ribociclib", "Rifabutin", "Rifampin", "Rifaximin", "Rilpivirine", "Riluzole",
                        "Riociguat", "Ripretinib", "Risankizumab", "Risdiplam", "Risedronic acid", "Risperidone", "Ritodrine", "Ritonavir", "Rituximab", "Rivaroxaban", "Rivastigmine", "Rizatriptan", "Robenacoxib", "Rocuronium bromide", "Rofecoxib", "Roflumilast", "Romidepsin", 
                        "Romifidine", "Romiplostim", "Romosozumab", "Ronidazole", "Ropinirole", "Rosiglitazone", "Rosoxacin", "Rosuvastatin", "Rotigotine", "Rufinamide", "Rupatadine", "Ruxolitinib", "Sacituzumab govitecan", "Sacubitril", "Safinamide", 
                        "Salbutamol", "Salicylic acid", "Salmeterol", "Salsalate", "Sapropterin", "Saquinavir", "Saralasin", "Sargramostim", "Sarilumab", "Satralizumab", "Saxagliptin", "Sebelipase alfa", "Secukinumab", "Selegiline", "Selexipag", "Selinexor", "Selpercatinib", 
                        "Selumetinib", "Semaglutide", "Sermorelin", "Sertraline", "Setmelanotide", "Sevelamer", "Sevoflurane", "Sex hormones (Natural or synthetic)", "Sibutramine", "Sildenafil", "Silodosin", "Siltuximab", "Simeprevir", "Simvastatin", "Siponimod", "Sirolimus", 
                        "Sitagliptin", "Sitaxentan", "Sodium Zirconium cyclosilicate", "Sodium bromide", "Sodium fluoride", "Sodium nitrite", "Sodium nitroprusside", "Sodium polystyrene sulfonate", "Sofosbuvir"]} onSelect={handleOptionSelect}/>
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
                                <span className="text-4xl text-blue-500">Pravastatin</span>
                            </div>
                            <Link to='/prescription' className="justify-center px-9 py-1 mt-12 text-3xl font-medium text-center text-white bg-blue-500 border-solid border-[3px] border-white border-opacity-0 rounded-[30px] max-md:px-5 max-md:mt-10">
                                Prescribe this instead.
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col px-5 mt-14 text-center max-md:mt-10 max-md:max-w-full">
                            <div className="self-center text-5xl font-semibold text-black max-md:max-w-full max-md:text-4xl">
                                Not recommended for use
                            </div>
                            <div className="mt-11 text-3xl text-neutral-500 max-md:mt-10 max-md:max-w-full">
                                {responseFromAsk}
                            </div>
                        </div>
                    </div>
                </div>
                </div>}
                {isVisible && <Link to={{ pathname: '/prescription', state: { selectedOption } }} className="justify-center items-center px-16 py-1 mt-40 max-w-full text-3xl font-medium text-center text-white bg-blue-500 border-solid border-[3px] border-white border-opacity-0 rounded-[30px] w-[659px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        Continue with chosen medication.
                </Link>}
            </div>
        </div>
    );
};