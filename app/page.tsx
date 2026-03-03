"use client";

import { useState, useEffect, useRef } from "react";

const translations = {
  hindi: {
    welcome_tagline: "IDEA हैकाथॉन 2026 · यूनियन बैंक ऑफ इंडिया",
    welcome_title: "आपकी बैंक,",
    welcome_subtitle: "आपकी भाषा",
    welcome_desc:
      "सभी बैंकिंग जरूरतों के लिए AI-संचालित स्व-सेवा। तेज़, सुरक्षित और 24×7 उपलब्ध।",
    login_btn: "लॉगिन करें",
    guest_btn: "अतिथि के रूप में जारी रखें",
    good_morning: "सुप्रभात",
    available_balance: "उपलब्ध शेष",
    what_today: "आज आप क्या करना चाहते हैं?",
    chat_bot: "BankBot के साथ चैट करें",
    fund_transfer: "धन अंतरण",
    account_statement: "खाता विवरण",
    loan_credit: "लोन और क्रेडिट",
    card_services: "कार्ड सेवाएं",
    fixed_deposits: "सावधि जमा",
    proceed: "आगे बढ़ें",
    apply: "आवेदन करें",
    back: "वापस",
    call_agent: "एजेंट को कॉल करें",
    manage: "प्रबंधित करें",
    open: "खोलें",
    verify_identity: "अपनी पहचान सत्यापित करें",
    face_id: "फेस आईडी",
    aadhaar_otp: "आधार OTP",
    voice_id: "वॉयस आईडी",
    session_status: "सत्र की स्थिति",
    identity: "पहचान",
    verified: "सत्यापित",
    auth_method: "प्रमाणीकरण विधि",
    session_expires: "सत्र समाप्त होता है",
    recent_transactions: "हाल की लेनदेन",
    transfer_method: "स्थानांतरण विधि चुनें",
    beneficiary: "लाभार्थी विवरण",
    transfer_amount: "स्थानांतरण राशि",
    benef_name: "लाभार्थी का नाम",
    mobile_account: "मोबाइल / खाता",
    amount: "राशि",
    daily_limit: "दैनिक सीमा",
    select_period: "अवधि चुनें",
    from_date: "से तारीख",
    to_date: "तक तारीख",
    current_loans: "वर्तमान ऋण",
    apply_loan: "नए लोन के लिए आवेदन करें",
    loan_type: "लोन प्रकार",
    loan_amount: "लोन राशि",
    current_rate: "वर्तमान दर",
    maturity_amount: "परिपक्वता राशि",
    your_cards: "आपके कार्ड",
    quick_actions: "त्वरित क्रिया",
    block_card: "कार्ड को ब्लॉक करें",
    change_pin: "PIN बदलें",
    set_limit: "सीमा निर्धारित करें",
    contactless: "संपर्क रहित",
    current_fds: "वर्तमान FDs",
    open_fd: "नया FD खोलें",
    tenure: "अवधि (महीने)",
    minimum: "न्यूनतम",
    p_a: "प्रति वर्ष",
    chat_placeholder: "टाइप करें या अपनी क्वेरी बोलें…",
    online: "ऑनलाइन",
    listening: "सुन रहा है",
    download_pdf: "PDF डाउनलोड करें",
    confirmation: "पुष्टिकरण",
    status: "स्थिति",
    success: "सफल!",
    successful: "आपका लेन-देन सफलतापूर्वक संसाधित हो गया है।",
    transaction_id: "लेन-देन ID",
    beneficiary_name: "लाभार्थी",
    method: "विधि",
    date_time: "तारीख और समय",
    print: "प्रिंट करें",
    home: "होम",
    services: "सेवाएं",
    chat: "चैट",
    confirmation_title: "पुष्टिकरण",
    confirm_details: "राशि की जांच करें और आगे बढ़ें",
    transaction_details: "लेनदेन विवरण",
    beneficiary_name: "लाभार्थी",
    method: "विधि",
    instant: "तत्काल",
    fee: "शुल्क",
    free: "निःशुल्क",
    total: "कुल",
    confirm_btn: "पुष्टि करें",
    cancel: "रद्द करें",
    success_exclaim: "सफल!",
    transfer_success: "स्थानांतरण सफल!",
    application_submitted: "आवेदन सबमिट किया गया",
    app_status: "आपके ऋण आवेदन की स्थिति देखें",
    application_details: "आवेदन विवरण",
    in_review: "समीक्षाधीन",
    requested_amount: "अनुरोधित राशि",
    tenure: "अवधि",
    application_id: "आवेदन आईडी",
    proposed_rate: "प्रस्तावित दर",
    application_submitted_step: "आवेदन सबमिट",
    document_verification: "दस्तावेज़ सत्यापन",
    approval: "अनुमोदन",
    next_step: "अगला चरण",
    documents_being_verified: "आपके दस्तावेज़ सत्यापित किए जा रहे हैं",
    estimated_time: "अनुमानित समय",
    working_days: "कार्य दिन",
    contact_agent: "एजेंट से संपर्क करें",
    card_management: "कार्ड प्रबंधन",
    manage_card_settings: "अपने कार्ड सेटिंग्स को नियंत्रित करें",
    select_card: "कार्ड का चयन करें",
    card_settings: "कार्ड सेटिंग्स",
    block_card_action: "कार्ड ब्लॉक करें",
    change_pin_action: "PIN बदलें",
    set_limit_action: "सीमा सेट करें",
    enable_contactless: "संपर्क रहित सक्षम",
    complete: "पूर्ण",
    fd_opened: "FD खोल दिया गया!",
    fd_opened_desc: "आपकी निश्चित जमा राशि सफलतापूर्वक खोल दी गई है।",
    fd_number: "FD संख्या",
    maturity_date: "परिपक्वता तारीख",
    maturity_amount: "परिपक्वता राशि",
    download_fd_doc: "FD दस्तावेज़ डाउनलोड करें",
    connect_agent: "एजेंट से जुड़ें",
    talk_with_support: "हमारे ग्राहक सेवा प्रतिनिधि से बात करें",
    connecting: "एजेंट से जुड़ा जा रहा है",
    please_wait: "कृपया प्रतीक्षा करें... आपको शीघ्र ही कनेक्ट किया जाएगा",
    agent_info: "एजेंट की जानकारी",
    senior_representative: "वरिष्ठ ग्राहक प्रतिनिधि",
    your_info: "आपकी जानकारी",
    name: "नाम",
    account: "खाता",
    call_status: "कॉल की स्थिति",
    call_in_progress: "आपकी कॉल प्रक्रिया में है...",
    seconds: "सेकंड",
    end_call: "कॉल समाप्त करें",
    go_back: "पीछे लौटें",
  },
  english: {
    welcome_tagline: "IDEA Hackathon 2026 · Union Bank of India",
    welcome_title: "Your Bank,",
    welcome_subtitle: "Your Language",
    welcome_desc:
      "AI-powered self-service for all your banking needs. Fast, secure, and available 24×7.",
    login_btn: "Login to My Account",
    guest_btn: "Continue as Guest",
    good_morning: "Good morning",
    available_balance: "Available Balance",
    what_today: "What would you like to do today?",
    chat_bot: "Chat with BankBot",
    fund_transfer: "Fund Transfer",
    account_statement: "Account Statement",
    loan_credit: "Loan & Credit",
    card_services: "Card Services",
    fixed_deposits: "Fixed Deposits",
    proceed: "Proceed",
    apply: "Apply Now",
    back: "Back",
    call_agent: "Call Agent",
    manage: "Manage Cards",
    open: "Open FD",
    verify_identity: "Verify Your Identity",
    face_id: "Face ID",
    aadhaar_otp: "Aadhaar OTP",
    voice_id: "Voice ID",
    session_status: "Session Status",
    identity: "Identity",
    verified: "Verified",
    auth_method: "Auth Method",
    session_expires: "Session expires in",
    recent_transactions: "Recent Transactions",
    transfer_method: "Select Transfer Method",
    beneficiary: "Beneficiary Details",
    transfer_amount: "Transfer Amount",
    benef_name: "Beneficiary Name",
    mobile_account: "Mobile / Account",
    amount: "Amount (Rs)",
    daily_limit: "Daily Limit",
    select_period: "Select Period",
    from_date: "From Date",
    to_date: "To Date",
    current_loans: "Current Loans",
    apply_loan: "Apply for New Loan",
    loan_type: "Loan Type",
    loan_amount: "Loan Amount Needed",
    current_rate: "Current Rate",
    maturity_amount: "Maturity Amount",
    your_cards: "Your Cards",
    quick_actions: "Quick Actions",
    block_card: "Block Card",
    change_pin: "Change PIN",
    set_limit: "Set Limit",
    contactless: "Contactless",
    current_fds: "Current Fixed Deposits",
    open_fd: "Open New FD",
    tenure: "Tenure (Months)",
    minimum: "Minimum Rs 1,000",
    p_a: "p.a.",
    chat_placeholder: "Type or speak your query…",
    online: "Online",
    listening: "Listening",
    download_pdf: "Download PDF",
    confirmation: "Confirmation",
    status: "Status",
    success: "Success!",
    successful: "Your transaction has been processed successfully.",
    transaction_id: "Transaction ID",
    beneficiary_name: "Beneficiary",
    method: "Method",
    date_time: "Date & Time",
    print: "Print Receipt",
    home: "Home",
    services: "Services",
    chat: "Chat",
    confirmation_title: "Confirmation",
    confirm_details: "Review the details and proceed",
    transaction_details: "Transaction Details",
    beneficiary_name: "Beneficiary",
    method: "Method",
    instant: "Instant",
    fee: "Fee",
    free: "Free",
    total: "Total",
    confirm_btn: "Confirm",
    cancel: "Cancel",
    success_exclaim: "Success!",
    transfer_success: "Transfer Successful!",
    application_submitted: "Application Submitted",
    app_status: "Check the status of your loan application",
    application_details: "Application Details",
    in_review: "Under Review",
    requested_amount: "Requested Amount",
    tenure: "Tenure",
    application_id: "Application ID",
    proposed_rate: "Proposed Rate",
    application_submitted_step: "Application Submitted",
    document_verification: "Document Verification",
    approval: "Approval",
    next_step: "Next Step",
    documents_being_verified: "Your documents are being verified",
    estimated_time: "Estimated Time",
    working_days: "Working Days",
    contact_agent: "Contact Agent",
    card_management: "Card Management",
    manage_card_settings: "Control your card settings",
    select_card: "Select Card",
    card_settings: "Card Settings",
    block_card_action: "Block Card",
    change_pin_action: "Change PIN",
    set_limit_action: "Set Limit",
    enable_contactless: "Enable Contactless",
    complete: "Complete",
    fd_opened: "FD Opened!",
    fd_opened_desc: "Your fixed deposit has been successfully opened.",
    fd_number: "FD Number",
    maturity_date: "Maturity Date",
    maturity_amount: "Maturity Amount",
    download_fd_doc: "Download FD Document",
    connect_agent: "Connect with Agent",
    talk_with_support: "Talk to our customer support representative",
    connecting: "Connecting with Agent",
    please_wait: "Please wait... you will be connected shortly",
    agent_info: "Agent Information",
    senior_representative: "Senior Customer Representative",
    your_info: "Your Information",
    name: "Name",
    account: "Account",
    call_status: "Call Status",
    call_in_progress: "Your call is in progress...",
    seconds: "Seconds",
    end_call: "End Call",
    go_back: "Go Back",
  },
  bengali: {
    welcome_tagline: "IDEA হ্যাকাথন 2026 · ইউনিয়ন ব্যাংক অফ ইন্ডিয়া",
    welcome_title: "আপনার ব্যাংক,",
    welcome_subtitle: "আপনার ভাষা",
    welcome_desc:
      "আপনার সমস্ত ব্যাংকিং প্রয়োজনের জন্য AI-চালিত স্ব-সেবা। দ্রুত, সুরক্ষিত এবং 24×7 উপলব্ধ।",
    login_btn: "আমার অ্যাকাউন্টে লগইন করুন",
    guest_btn: "অতিথি হিসাবে চালিয়ে যান",
    good_morning: "শুভ সকাল",
    available_balance: "উপলব্ধ ব্যালেন্��",
    what_today: "আজ আপনি কী করতে চান?",
    chat_bot: "BankBot এর সাথে চ্যাট করুন",
    fund_transfer: "তহবিল স্থানান্তর",
    account_statement: "অ্যাকাউন্ট স্টেটমেন্ট",
    loan_credit: "ঋণ এবং ক্রেডিট",
    card_services: "কার্ড পরিষেবা",
    fixed_deposits: "স্থায়ী জমা",
    proceed: "এগিয়ে যান",
    apply: "এখনই আবেদন করুন",
    back: "ফিরে যান",
    call_agent: "এজেন্টকে কল করুন",
    manage: "কার্ড পরিচালনা করুন",
    open: "FD খুলুন",
    verify_identity: "আপনার পরিচয় যাচাই করুন",
    face_id: "ফেস আইডি",
    aadhaar_otp: "আধার OTP",
    voice_id: "ভয়েস আইডি",
    session_status: "সেশন স্থিতি",
    identity: "পরিচয়",
    verified: "যাচাইকৃত",
    auth_method: "প্রমাণীকরণ পদ্ধতি",
    session_expires: "সেশন শেষ হয়",
    recent_transactions: "সাম্প্রতিক লেনদেন",
    transfer_method: "স্থানান্তর পদ্ধতি নির্বাচন করুন",
    beneficiary: "প্রাপক বিবরণ",
    transfer_amount: "স্থানান্তর পরিমাণ",
    benef_name: "প্রাপকের নাম",
    mobile_account: "মোবাইল / অ্যাকাউন্ট",
    amount: "পরিমাণ",
    daily_limit: "দৈনিক সীমা",
    select_period: "সময়কাল নির্বাচন করুন",
    from_date: "তারিখ থেকে",
    to_date: "তারিখ পর্যন্ত",
    current_loans: "বর্তমান ঋণ",
    apply_loan: "নতুন ঋণের জন্য আবেদন করুন",
    loan_type: "ঋণের ধরন",
    loan_amount: "প্রয়োজনীয় ঋণ পরিমাণ",
    current_rate: "বর্তমান হার",
    maturity_amount: "পরিপক্কতা পরিমাণ",
    your_cards: "আপনার কার্ড",
    quick_actions: "দ্রুত পদক্ষেপ",
    block_card: "কার্ড ব্লক করুন",
    change_pin: "PIN পরিবর্তন করুন",
    set_limit: "সীমা নির্ধারণ করুন",
    contactless: "সংস্পর্শহীন",
    current_fds: "বর্তমান FDs",
    open_fd: "নতুন FD খুলুন",
    tenure: "মেয়াদ (মাস)",
    minimum: "ন্যূনতম ১,০০০ টাকা",
    p_a: "বার্ষিক",
    chat_placeholder: "টাইপ করুন বা আপনার প্রশ্ন বলুন…",
    online: "অনলাইন",
    listening: "শুনছি",
    download_pdf: "PDF ডাউনলোড করুন",
    confirmation: "নিশ্চিতকরণ",
    status: "স্থিতি",
    success: "সফল!",
    successful: "আপনার লেনদেন সফলভাবে প্রক্রিয়া করা হয়েছে।",
    transaction_id: "লেনদেন ID",
    beneficiary_name: "প্রাপক",
    method: "পদ্ধতি",
    date_time: "তারিখ ও সময়",
    print: "রসিদ প্রিন্ট করুন",
    home: "হোম",
    services: "পরিষেবা",
    chat: "চ্যাট",
    confirmation_title: "নিশ্চিতকরণ",
    confirm_details: "বিবরণ পর্যালোচনা করুন এবং এগিয়ে যান",
    transaction_details: "লেনদেন বিবরণ",
    beneficiary_name: "প্রাপক",
    method: "পদ্ধতি",
    instant: "তাৎক্ষণিক",
    fee: "ফি",
    free: "বিনামূল্যে",
    total: "মোট",
    confirm_btn: "নিশ্চিত করুন",
    cancel: "বাতিল করুন",
    success_exclaim: "সফল!",
    transfer_success: "স্থানান্তর সফল!",
    application_submitted: "আবেদন জমা দেওয়া হয়েছে",
    app_status: "আপনার ঋণ আবেদনের অবস্থা পরীক্ষা করুন",
    application_details: "আবেদন বিবরণ",
    in_review: "পর্যালোচনাধীন",
    requested_amount: "অনুরোধ করা পরিমাণ",
    tenure: "মেয়াদ",
    application_id: "আবেদন ID",
    proposed_rate: "প্রস্তাবিত হার",
    application_submitted_step: "আবেদন জমা",
    document_verification: "নথি যাচাইকরণ",
    approval: "অনুমোদন",
    next_step: "পরবর্তী পদক্ষেপ",
    documents_being_verified: "আপনার নথি যাচাই করা হচ্ছে",
    estimated_time: "অনুমানিত সময়",
    working_days: "কর্মদিবস",
    contact_agent: "এজেন্টের সাথে যোগাযোগ করুন",
    card_management: "কার্ড ম্যানেজমেন্ট",
    manage_card_settings: "আপনার কার্ড সেটিংস নিয়ন্ত্রণ করুন",
    select_card: "কার্ড নির্বাচন করুন",
    card_settings: "কার্ড সেটিংস",
    block_card_action: "কার্ড ব্লক করুন",
    change_pin_action: "PIN পরিবর্তন করুন",
    set_limit_action: "সীমা সেট করুন",
    enable_contactless: "সংস্পর্শহীন সক্ষম করুন",
    complete: "সম্পন্ন",
    fd_opened: "FD খোলা!",
    fd_opened_desc: "আপনার স্থির জমা সফলভাবে খোলা হয়েছে।",
    fd_number: "FD নম্বর",
    maturity_date: "পরিপক্কতার তারিখ",
    maturity_amount: "পরিপক্কতার পরিমাণ",
    download_fd_doc: "FD নথি ডাউনলোড করুন",
    connect_agent: "এজেন্টের সাথে সংযোগ করুন",
    talk_with_support: "আমাদের গ্রাহক সহায়তা প্রতিনিধির সাথে কথা বলুন",
    connecting: "এজেন্টের সাথে সংযোগ করা হচ্ছে",
    please_wait: "অনুগ্রহ করে অপেক্ষা করুন... আপনি শীঘ্রই সংযুক্ত হবেন",
    agent_info: "এজেন্ট তথ্য",
    senior_representative: "সিনিয়র গ্রাহক প্রতিনিধি",
    your_info: "আপনার তথ্য",
    name: "নাম",
    account: "অ্যাকাউন্ট",
    call_status: "কল স্ট্যাটাস",
    call_in_progress: "আপনার কল চলছে...",
    seconds: "সেকেন্ড",
    end_call: "কল শেষ করুন",
    go_back: "পিছনে যান",
  },
  tamil: {
    welcome_tagline: "IDEA ஹ்যাக்கத்தான் 2026 · யூனியன் வங்கி ஆஃப் இந்தியா",
    welcome_title: "உங்கள் வங்கி,",
    welcome_subtitle: "உங்கள் மொழி",
    welcome_desc:
      "உங்கள் அனைத்து ব්যাংকிং தேவைகளுக்கான AI-চালিত স্ব-সেவা। வேகமான, பாதுகாப்பான மற்றும் 24×7 கிடைக்கிறது।",
    login_btn: "எனது கணக்கில் உள்நுழைக",
    guest_btn: "விருந்தினராக தொடரவும்",
    good_morning: "காலை வணக்கம்",
    available_balance: "கிடைக்கும் சமநிலை",
    what_today: "இன்று என்ன செய்ய விரும்புகிறீர்கள்?",
    chat_bot: "BankBot ஐ உடன் விவாதிக்கவும்",
    fund_transfer: "நிதி பரிமாற்றம்",
    account_statement: "கணக்கு அறிக்கை",
    loan_credit: "கடன் மற்றும் கடன்",
    card_services: "கார்டு சேவைகள்",
    fixed_deposits: "நிலையான வைப்பு",
    proceed: "முன்னேற",
    apply: "இப்போது விண்ணப்பிக்கவும்",
    back: "திரும்பி செல்",
    call_agent: "முகவர்களை அழைக்கவும்",
    manage: "கார்டுகளை நிர்வகிக்கவும்",
    open: "FD ஐ திற",
    verify_identity: "உங்கள் அடையாளத்தை சரிபார்க்கவும்",
    face_id: "முக ID",
    aadhaar_otp: "ஆதார் OTP",
    voice_id: "குரல் ID",
    session_status: "அமர்வு நிலை",
    identity: "அடையாளம்",
    verified: "சரிபார்க்கப்பட்ட",
    auth_method: "உறுதிப்படுத்தல் முறை",
    session_expires: "அமர்வு முடிவடைகிறது",
    recent_transactions: "சமீபத்திய பரிவர்த்தனைகள்",
    transfer_method: "பரிமாற்ற முறையைத் தேர்ந்தெடுக்கவும்",
    beneficiary: "பயனாளী விবரங்கள்",
    transfer_amount: "பரிமாற்ற தொகை",
    benef_name: "பயனாளியின் பெயர்",
    mobile_account: "மோபைல் / கணக்கு",
    amount: "தொகை",
    daily_limit: "தினசரி வரம்பு",
    select_period: "காலத்தைத் தேர்ந்தெடுக்கவும்",
    from_date: "தேதியிலிருந்து",
    to_date: "தேதி வரை",
    current_loans: "বর্তমান கடன்",
    apply_loan: "புதிய கடனுக்கு விண்ணப்பிக்கவும்",
    loan_type: "கடনின் வகை",
    loan_amount: "প्রয়োজনীয় ঋণ পরিমাণ",
    current_rate: "বর্তমান হার",
    maturity_amount: "পরিপক্কতা পরিমাণ",
    your_cards: "உங்கள் கார்டுகள்",
    quick_actions: "விரைவு செயல்கள்",
    block_card: "கார்டை தடு",
    change_pin: "PIN ஐ மாற்று",
    set_limit: "வரம்பை அமைக்கவும்",
    contactless: "যোগাযோগ இல்லாத",
    current_fds: "বর্तমান FDs",
    open_fd: "নতুন FD খোলার",
    tenure: "கால (মাস)",
    minimum: "न्यूनतम ₹1,000",
    p_a: "प्रति वर्ष",
    chat_placeholder: "টাইপ করুন অথবা আপনার প্রশ্ন বলুন…",
    online: "অনলাইন",
    listening: "শোনা",
    download_pdf: "PDF ডাউনलোড করুন",
    confirmation: "নিশ্চিতকরণ",
    status: "অবস্থা",
    success: "সফল!",
    successful: "আপনার লেনদেন সফলভাবে প্রক্রিয়া করা হয়েছে।",
    transaction_id: "লেনদেন ID",
    beneficiary_name: "পূর্বোত্তর",
    method: "পদ্ধতি",
    date_time: "তারিখ ও সময়",
    print: "রশিদ মুদ্রণ করুন",
    home: "বাড়ি",
    services: "সেবা",
    chat: "চ্যাট",
  },
  telugu: {
    welcome_tagline: "IDEA హ్యాకాథాన్ 2026 · యూనియన్ బ్యాంక్ ఆఫ్ ఇండియా",
    welcome_title: "మీ బ్యాంక్,",
    welcome_subtitle: "మీ భాష",
    welcome_desc:
      "మీ అన్ని ఆర్థిక పరিষేవల కోసం AI-ఆధారిత స్వీయ సేవ. వేగవంతమైన, సురక్షితమైన మరియు 24×7 అందుబాటులో ఉంది.",
    login_btn: "నా ఖాతాకు ప్రవేశించండి",
    guest_btn: "అతిథిగా కొనసాగించండి",
    good_morning: "శుభోదయం",
    available_balance: "లభ్యమైన బ్యాలెన్స్",
    what_today: "ఈ రోజు మీరు ఏమి చేయాలనుకుంటున్నారు?",
    chat_bot: "BankBot తో చాట్ చేయండి",
    fund_transfer: "నిధి బదిలీ",
    account_statement: "ఖాతా ప్రకటన",
    loan_credit: "రుణం మరియు క్రెడిట్",
    card_services: "కార్డు సేవలు",
    fixed_deposits: "స్థిర డిపాజిట్లు",
    proceed: "ముందుకు వెళ్లండి",
    apply: "ఇప్పుడు అర్హత సాధించండి",
    back: "ఆ తరుపు",
    call_agent: "ఏజెంట్ కు కాల్ చేయండి",
    manage: "కార్డులను నిర్వహించండి",
    open: "FD తెరవండి",
    verify_identity: "మీ గుర్తింపును ధృవీకరించండి",
    face_id: "ముఖ ID",
    aadhaar_otp: "ఆధార్ OTP",
    voice_id: "వాయిస్ ID",
    session_status: "సెషన్ స్థితి",
    identity: "గుర్తింపు",
    verified: "ధృవీకృతమైన",
    auth_method: "ప్రామాణీకరణ పద్ధతి",
    session_expires: "సెషన్ ముగిసిపోతుంది",
    recent_transactions: "ఇటీవలి లావాదేవీలు",
    transfer_method: "బదిలీ పద్ధతిని ఎంచుకోండి",
    beneficiary: "లాభార్థి వివరాలు",
    transfer_amount: "బదిలీ మొత్తం",
    benef_name: "లాభార్థి పేరు",
    mobile_account: "మొబైల్ / ఖాతా",
    amount: "మొత్తం",
    daily_limit: "రోజువారీ పరిమితి",
    select_period: "కాలాన్ని ఎంచుకోండి",
    from_date: "తేదీ నుండి",
    to_date: "తేదీ వరకు",
    current_loans: "ప్రస్తుత రుణాలు",
    apply_loan: "కొత్త రుణానికి దరఖాస్తు చేయండి",
    loan_type: "రుణ రకం",
    loan_amount: "అవసరమైన రుణ మొత్తం",
    current_rate: "ప్రస్తుత రేటు",
    maturity_amount: "పరిపక్వత మొత్తం",
    your_cards: "మీ కార్డులు",
    quick_actions: "శీఘ్ర చర్యలు",
    block_card: "కార్డును బ్లాక్ చేయండి",
    change_pin: "PIN ని మార్చండి",
    set_limit: "పరిమితిని సెట్ చేయండి",
    contactless: "సంప్రదాయ రహితం",
    current_fds: "ప్రస్తుత FDs",
    open_fd: "కొత్త FD తెరవండి",
    tenure: "వ్యవధి (నెలలు)",
    minimum: "కనీసం ₹1,000",
    p_a: "సంవత్సరానికి",
    chat_placeholder: "టైప్ చేయండి లేదా మీ ప్రశ్న మాట్లాడండి…",
    online: "ఆన్‌లైన్",
    listening: "వింటున్నారు",
    download_pdf: "PDF డౌన్‌లోడ్ చేయండి",
    confirmation: "నిర్ధారణ",
    status: "స్థితి",
    success: "విజయం!",
    successful: "మీ లావాదేవీ విజయవంతంగా ప్రక్రియ చేయబడింది.",
    transaction_id: "లావాదేవీ ID",
    beneficiary_name: "లాభార్థి",
    method: "పద్ధతి",
    date_time: "తేదీ & సమయం",
    print: "రసీద్ ను ముద్రించండి",
    home: "ఇల్లు",
    services: "సేవలు",
    chat: "చాట్",
  },
  marathi: {
    welcome_tagline: "IDEA हॅकाथॉन 2026 · यूनियन बँक ऑफ इंडिया",
    welcome_title: "आपली बँक,",
    welcome_subtitle: "आपली भाषा",
    welcome_desc:
      "आपल्या सर्व बँकिंग गरजांसाठी AI-चालित स्व-सेवा. वेगवान, सुरक्षित आणि 24×7 उपलब्ध.",
    login_btn: "माझ्या खात्यात लॉग इन करा",
    guest_btn: "अतिथी म्हणून चालू ठेवा",
    good_morning: "शुभ प्रभात",
    available_balance: "उपलब्ध शेष",
    what_today: "आज आप काय करू इच्छिता?",
    chat_bot: "BankBot सोबत चॅट करा",
    fund_transfer: "निधी हस्तांतरण",
    account_statement: "खाते विवरण",
    loan_credit: "कर्ज आणि क्रेडिट",
    card_services: "कार्ड सेवा",
    fixed_deposits: "स्थिर ठेव",
    proceed: "पुढे जा",
    apply: "आता अर्ज करा",
    back: "मागे जा",
    call_agent: "एजंटला कॉल करा",
    manage: "कार्ड व्यवस्थापित करा",
    open: "FD उघडा",
    verify_identity: "आपली ओळख सत्यापित करा",
    face_id: "चेहरा ID",
    aadhaar_otp: "आधार OTP",
    voice_id: "व्हॉईस ID",
    session_status: "सत्र स्थिती",
    identity: "ओळख",
    verified: "सत्यापित",
    auth_method: "प्रमाणीकरण पद्धती",
    session_expires: "सत्र संपला",
    recent_transactions: "अलीकडील व्यवहार",
    transfer_method: "हस्तांतरण पद्धती निवडा",
    beneficiary: "लाभार्थी तपशील",
    transfer_amount: "हस्तांतरण रक्कम",
    benef_name: "लाभार्थी नाव",
    mobile_account: "मोबाईल / खाता",
    amount: "रक्कम",
    daily_limit: "दैनिक मर्यादा",
    select_period: "कालावधी निवडा",
    from_date: "तारीख पासून",
    to_date: "तारीख पर्यंत",
    current_loans: "चालू कर्ज",
    apply_loan: "नवीन कर्जाचे अर्ज करा",
    loan_type: "कर्जाचा प्रकार",
    loan_amount: "आवश्यक कर्ज रक्कम",
    current_rate: "वर्तमान दर",
    maturity_amount: "परिपक्वता रक्कम",
    your_cards: "आपली कार्ड",
    quick_actions: "द्रुत क्रिया",
    block_card: "कार्ड ब्लॉक करा",
    change_pin: "PIN बदला",
    set_limit: "मर्यादा सेट करा",
    contactless: "संपर्क रहित",
    current_fds: "चालू FDs",
    open_fd: "नवीन FD उघडा",
    tenure: "कालावधी (महिने)",
    minimum: "किमान ₹1,000",
    p_a: "प्रति वर्ष",
    chat_placeholder: "टाइप करा किंवा आपली क्वेरी बोला…",
    online: "ऑनलाईन",
    listening: "ऐकत आहे",
    download_pdf: "PDF डाउनलोड करा",
    confirmation: "पुष्टिकरण",
    status: "स्थिती",
    success: "यशस्वी!",
    successful: "आपला व्यवहार यशस्वीरित्या प्रक्रिया केला गेला आहे.",
    transaction_id: "व्यवहार ID",
    beneficiary_name: "लाभार्थी",
    method: "पद्धती",
    date_time: "तारीख & वेळ",
    print: "रसीद प्रिंट करा",
    home: "घर",
    services: "सेवा",
    chat: "चॅट",
  },
  kannada: {
    welcome_tagline: "IDEA ಹ್ಯಾಕಾಥಾನ್ 2026 · ಯೂನಿಯನ್ ಬ್ಯಾಂಕ್ ಆಫ್ ಇಂಡಿಯಾ",
    welcome_title: "ನಿಮ್ಮ ಬ್ಯಾಂಕ್,",
    welcome_subtitle: "ನಿಮ್ಮ ಭಾಷೆ",
    welcome_desc:
      "ಎಲ್ಲಾ ಬ್ಯಾಂಕಿಂಗ್ ಅಗತ್ಯತೆಗಳಿಗೆ AI-ಚಾಲಿತ ಸ್ವಯಂ-ಸೇವೆ. ವೇಗವಾಗಿ, ನಿರಾಪದ ಮತ್ತು 24×7 ಲಭ್ಯವಾಗಿದೆ.",
    login_btn: "ನನ್ನ ಖಾತೆಗೆ ಲಾಗಿನ್ ಮಾಡಿ",
    guest_btn: "ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಸಿ",
    good_morning: "ಶುಭೋದಯ",
    available_balance: "ಲಭ್ಯವಾಗಿರುವ ಬ್ಯಾಲೆನ್ಸ್",
    what_today: "ನೀವು ಇಂದು ಏನು ಮಾಡಲು ಬಯಸುತ್ತೀರಿ?",
    chat_bot: "BankBot ನೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ",
    fund_transfer: "ನಿಧಿ ವರ್ಗಾವಣೆ",
    account_statement: "ಖಾತೆ ಹೇಳಿಕೆ",
    loan_credit: "ಸಾಲ ಮತ್ತು ಕ್ರೆಡಿಟ್",
    card_services: "ಕಾರ್ಡ್ ಸೇವೆಗಳು",
    fixed_deposits: "ಸ್ಥಿರ ಠೇವಣಿ",
    proceed: "ಮುಂದುವರಿಸಿ",
    apply: "ಈಗ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    back: "ಹಿಂದೆ",
    call_agent: "ಏಜೆಂಟ್‌ಗೆ ಕರೆ ಮಾಡಿ",
    manage: "ಕಾರ್ಡ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
    open: "FD ತೆರೆಯಿರಿ",
    verify_identity: "ನಿಮ್ಮ ಗುರುತನ್ನು ಪರಿಶೀಲಿಸಿ",
    face_id: "ಮುಖ ID",
    aadhaar_otp: "ಆಧಾರ್ OTP",
    voice_id: "ವಾಯ್ಸ್ ID",
    session_status: "ಸೆಷನ್ ಸ್ಥಿತಿ",
    identity: "ಗುರುತು",
    verified: "ಪರಿಶೀಲಿತ",
    auth_method: "ಪ್ರಮಾಣೀಕರಣ ವಿಧಾನ",
    session_expires: "ಸೆಷನ್ ಅವಧಿ ಮುಗಿಯುತ್ತದೆ",
    recent_transactions: "ಇತ್ತೀಚಿನ ಲೆನ್ದೆನ್",
    transfer_method: "ವರ್ಗಾವಣೆ ವಿಧಾನವನ್ನು ಆರಿಸಿ",
    beneficiary: "ಲಾಭಾರ್ಥಿ ವಿವರಗಳು",
    transfer_amount: "ವರ್ಗಾವಣೆ ಮೊತ್ತ",
    benef_name: "ಲಾಭಾರ್ಥಿಯ ಹೆಸರು",
    mobile_account: "ಮೊಬೈಲ್ / ಖಾತೆ",
    amount: "ಮೊತ್ತ",
    daily_limit: "ದೈನಂದಿನ ಮಿತಿ",
    select_period: "ಅವಧಿಯನ್ನು ಆರಿಸಿ",
    from_date: "ದಿನಾಂಕದಿಂದ",
    to_date: "ದಿನಾಂಕ ವರೆಗೆ",
    current_loans: "ಪ್ರಸ್ತುತ ಸಾಲಗಳು",
    apply_loan: "ಹೊಸ ಸಾಲಕ್ಕೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಿ",
    loan_type: "ಸಾಲದ ಪ್ರಕಾರ",
    loan_amount: "ಅಗತ್ಯವಿರುವ ಸಾಲದ ಮೊತ್ತ",
    current_rate: "ಪ್ರಸ್ತುತ ದರ",
    maturity_amount: "ಪರಿಪಕ್ವತೆ ಮೊತ್ತ",
    your_cards: "ನಿಮ್ಮ ಕಾರ್ಡ್‌ಗಳು",
    quick_actions: "ತ್ವರಿತ ಕ್ರಿಯೆಗಳು",
    block_card: "ಕಾರ್ಡ್ ಬ್ಲಾಕ್ ಮಾಡಿ",
    change_pin: "PIN ಬದಲಾಯಿಸಿ",
    set_limit: "ಮಿತಿ ಹೊಂದಿಸಿ",
    contactless: "ಸಂಪರ್ಕ ರಹಿತ",
    current_fds: "ಪ್ರಸ್ತುತ FDs",
    open_fd: "ಹೊಸ FD ತೆರೆಯಿರಿ",
    tenure: "ಅವಧಿ (ತಿಂಗಳುಗಳು)",
    minimum: "ಕನಿಷ್ಠ ₹1,000",
    p_a: "ಪ್ರತಿ ವರ್ಷ",
    chat_placeholder: "ಟೈಪ್ ಮಾಡಿ ಅಥವಾ ನಿಮ್ಮ ಪ್ರಶ್ನೆಯನ್ನು ಮಾತನಾಡಿ…",
    online: "ಆನ್‌ಲೈನ್",
    listening: "ಕೇಳುತ್ತಿದೆ",
    download_pdf: "PDF ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ",
    confirmation: "ದೃಢೀಕರಣ",
    status: "ಸ್ಥಿತಿ",
    success: "ಯಶಸ್ವಿ!",
    successful: "ನಿಮ್ಮ ವಹಿವಾಟು ಯಶಸ್ವಿಯಾಗಿ ಪ್ರಕ್ರಿಯೆಗೊಂಡಿದೆ.",
    transaction_id: "ಲೆನ್ದೆನ್ ID",
    beneficiary_name: "ಲಾಭಾರ್ಥಿ",
    method: "ವಿಧಾನ",
    date_time: "ದಿನಾಂಕ & ಸಮಯ",
    print: "ರಸೀದಿ ಪ್ರಿಂಟ್ ಮಾಡಿ",
    home: "ಮನೆ",
    services: "ಸೇವೆಗಳು",
    chat: "ಚಾಟ್",
  },
  punjabi: {
    welcome_tagline: "IDEA ਹੈਕਾਥਨ 2026 · ਯੂਨੀਅਨ ਬੈਂਕ ਆਫ ਇੰਡੀਆ",
    welcome_title: "ਤੁਹਾਡੀ ਬੈਂਕ,",
    welcome_subtitle: "ਤੁਹਾਡੀ ਭਾਸ਼ਾ",
    welcome_desc:
      "ਤੁਹਾਡੀਆਂ ਸਾਰੀਆਂ ਬੈਂਕਿੰਗ ਲੋੜਾਂ ਲਈ AI-ਚਾਲਿਤ ਸਵੈ-ਸੇਵਾ। ਤੇਜ਼, ਸੁਰਕਸ਼ਿਤ ਅਤੇ 24×7 ਉਪਲਬਧ।",
    login_btn: "ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਲੌਗ ਇਨ ਕਰੋ",
    guest_btn: "ਮਹਿਮਾਨ ਵਜੋਂ ਜਾਰੀ ਰੱਖੋ",
    good_morning: "ਸ਼ੁਭ ਸਵੇਰੇ",
    available_balance: "ਉਪਲਬਧ ਬੈਲੀਂਸ",
    what_today: "ਤੁਸੀਂ ਅੱਜ ਕੀ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
    chat_bot: "BankBot ਨਾਲ ਚੈਟ ਕਰੋ",
    fund_transfer: "ਧਨ ਟ੍ਰਾਂਸਫਰ",
    account_statement: "ਖਾਤਾ ਸਟੇਟਮੈਂਟ",
    loan_credit: "਋ਣ ਅਤੇ ਕ੍ਰੈਡਿਟ",
    card_services: "ਕਾਰਡ ਸਵੇਰਾ",
    fixed_deposits: "ਸਥਿਰ ਜਮਾ",
    proceed: "ਅੱਗੇ ਵਧੋ",
    apply: "ਹੁਣੇ ਲਾਗੂ ਕਰੋ",
    back: "ਪਿਛੇ",
    call_agent: "ਏਜੰਟ ਨੂੰ ਕਾਲ ਕਰੋ",
    manage: "ਕਾਰਡ ਦਾ ਪ੍ਰਬੰਧ ਕਰੋ",
    open: "FD ਖੋਲੋ",
    verify_identity: "ਆਪਣੀ ਪਛਾਣ ਦੀ ਪੁਸ਼ਟੀ ਕਰੋ",
    face_id: "ਚਿਹਰਾ ID",
    aadhaar_otp: "ਆਧਾਰ OTP",
    voice_id: "ਵੌਇਸ ID",
    session_status: "ਸੈਸ਼ਨ ਸਥਿਤੀ",
    identity: "ਪਛਾਣ",
    verified: "ਪੁਸ਼ਟੀ ਕੀਤਾ",
    auth_method: "ਪ੍ਰਮਾਣਨ ਵਿਧੀ",
    session_expires: "ਸੈਸ਼ਨ ਮਿਆਦ ਖਤਮ",
    recent_transactions: "ਹਾਲੀਆ ਲੈਣ-ਦੇਣ",
    transfer_method: "ਟ੍ਰਾਂਸਫਰ ਵਿਧੀ ਚੁਣੋ",
    beneficiary: "ਲਾਭਾਰਥੀ ਦੇ ਵੇਰਵੇ",
    transfer_amount: "ਟ੍ਰਾਂਸਫਰ ਰਕਮ",
    benef_name: "ਲਾਭਾਰਥੀ ਦਾ ਨਾਮ",
    mobile_account: "ਮੋਬਾਈਲ / ਖਾਤਾ",
    amount: "ਰਕਮ",
    daily_limit: "ਰੋਜ਼ਾਨਾ ਸੀਮਾ",
    select_period: "ਅਵਧੀ ਚੁਣੋ",
    from_date: "ਤਾਰੀਖ ਤੋਂ",
    to_date: "ਤਾਰੀਖ ਤੱਕ",
    current_loans: "ਮੌਜੂਦਾ ਋ਣ",
    apply_loan: "ਨਵੀਨ ਋ਣ ਲਈ ਆਵੇਦਨ ਕਰੋ",
    loan_type: "਋ਣ ਕਿਸਮ",
    loan_amount: "ਲੋੜੀਂਦੀ ਋ਣ ਰਕਮ",
    current_rate: "ਮੌਜੂਦਾ ਦਰ",
    maturity_amount: "ਪਰਿਪੱਕਵਤਾ ਮਾਤਰਾ",
    your_cards: "ਤੁਹਾਡੇ ਕਾਰਡ",
    quick_actions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
    block_card: "ਕਾਰਡ ਨੂੰ ਬਲਾਕ ਕਰੋ",
    change_pin: "PIN ਬਦਲੋ",
    set_limit: "ਸੀਮਾ ਸੈੱਟ ਕਰੋ",
    contactless: "ਸੰਪਰਕ ਰਹਿਤ",
    current_fds: "ਮੌਜੂਦਾ FDs",
    open_fd: "ਨਵਾਂ FD ਖੋਲੋ",
    tenure: "ਮਿਆਦ (ਮਹੀਨੇ)",
    minimum: "ਘੱਟੋ ਘੱਟ ₹1,000",
    p_a: "ਪ੍ਰਤੀ ਸਾਲ",
    chat_placeholder: "ਟਾਈਪ ਕਰੋ ਜਾਂ ਆਪਣੀ ਪੁੱਛਗਿੱਛ ਬੋਲੋ…",
    online: "ਆਨ ਲਾਈਨ",
    listening: "ਸੁਣ ਰਹੇ ਹੋ",
    download_pdf: "PDF ਡਾؤਨਲੋਡ ਕਰੋ",
    confirmation: "ਨਿਸ਼ਚਿਤਕਰਨ",
    status: "ਸਥਿਤੀ",
    success: "ਸਫ਼ਲ!",
    successful: "ਤੁਹਾਡਾ ਲੈਣ-ਦੇਣ ਸਫਲਤਾ ਨਾਲ ਪ੍ਰਕਿਰਿਆ ਕੀਤਾ ਗਿਆ ਹੈ।",
    transaction_id: "ਲੈਣ-ਦੇਣ ID",
    beneficiary_name: "ਲਾਭਾਰਥੀ",
    method: "ਤਰੀਕਾ",
    date_time: "ਤਾਰੀਖ ਅਤੇ ਸਮਾਂ",
    print: "ਰਸੀਦ ਪ੍ਰਿੰਟ ਕਰੋ",
    home: "ਘਰ",
    services: "ਸੇਵਾ",
    chat: "ਚੈਟ",
  },
};

export default function BankBot() {
  const [activeView, setActiveView] = useState("welcome");
  const [selectedLang, setSelectedLang] = useState("english");
  const [selectedAuth, setSelectedAuth] = useState("face");
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "नमस्ते Amit जी! 🙏 मैं BankBot हूँ। आज मैं आपकी क्या सहायता कर सकता हूँ?\n\n(Hi Amit! I'm BankBot. How can I help you today?)",
    },
    { role: "user", text: "मुझे ₹5,000 Priya को भेजने हैं", time: "10:32 AM" },
    {
      role: "bot",
      text: "बिल्कुल! मैं Priya Sharma (A/C •••• 7821) को ₹5,000 भेजने में आपकी मदद करूँगा।\n\nकृपया पुष्टि करें: ₹5,000 → Priya Sharma via UPI?",
    },
    { role: "user", text: "हाँ, confirm करो", time: "10:33 AM" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [sessionTime, setSessionTime] = useState("04:58");
  const [currentTime, setCurrentTime] = useState("00:00");
  const [micActive, setMicActive] = useState(false);
  const chatEndRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cameraActive, setCameraActive] = useState(false);
  const streamRef = useRef<MediaStream | null>(null);

  const t = (key: keyof (typeof translations)["english"]) => {
    return (
      translations[selectedLang as keyof typeof translations]?.[key] ||
      translations.english[key]
    );
  };

  const responses = [
    "₹5,000 Priya Sharma को transfer हो गया!  Transaction ID: UPI/260303/TXN7821K\n\nक्या आप receipt print करना चाहेंगे?",
    "आपका balance check हो गया। Available balance: ₹54,230.00",
    "आपकी mini statement ready है। Last 5 transactions display हो रही हैं।",
    "आपका card block कर दिया गया है। Emergency helpline: 1800-22-2244",
    "मैं आपको अभी एक human agent से connect कर रहा हूँ। कृपया प्रतीक्षा करें… 🔄",
  ];
  let msgCount = useRef(0);

  // Clock update
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" }),
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Session timer
  useEffect(() => {
    let secs = 298;
    const timer = setInterval(() => {
      if (secs > 0) secs--;
      const m = String(Math.floor(secs / 60)).padStart(2, "0");
      const s = String(secs % 60).padStart(2, "0");
      setSessionTime(`${m}:${s}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = async () => {
    const text = chatInput.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
        time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setChatInput("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const resp = responses[msgCount.current % responses.length];
      setMessages((prev) => [...prev, { role: "bot", text: resp }]);
      msgCount.current++;

      if (resp.includes("transfer हो गया")) {
        setTimeout(() => setActiveView("success"), 1400);
      }
    }, 1200);
  };

  const sendChip = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
        time: new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const resp = responses[msgCount.current % responses.length];
      setMessages((prev) => [...prev, { role: "bot", text: resp }]);
      msgCount.current++;
    }, 1000);
  };

  const toggleMic = () => {
    setMicActive(true);
    setTimeout(() => {
      setMicActive(false);
      setChatInput("मेरा balance बताओ");
    }, 2000);
  };

  // Camera for Face ID
  useEffect(() => {
    if (activeView === "auth" && selectedAuth === "face" && !cameraActive) {
      startCamera();
    } else if (cameraActive && activeView !== "auth") {
      stopCamera();
    }
  }, [activeView, selectedAuth, cameraActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setCameraActive(true);
      }
    } catch (err) {
      console.log("Camera access denied or not available");
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraActive(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--navy)" }}>
      <style>{`
        :root {
          --navy: #0A1628;
          --deep: #0D1F3C;
          --blue: #1557FF;
          --cyan: #00D4FF;
          --gold: #FFB800;
          --green: #00E5A0;
          --red: #FF4D6A;
          --glass: rgba(255,255,255,0.06);
          --glass2: rgba(255,255,255,0.10);
          --border: rgba(255,255,255,0.10);
          --text: #E8EDF5;
          --muted: #7A8CA8;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--navy); font-family: 'DM Sans', sans-serif; color: var(--text); }
        
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 20% 10%, rgba(21,87,255,0.18) 0%, transparent 70%),
                      radial-gradient(ellipse 40% 40% at 80% 80%, rgba(0,212,255,0.10) 0%, transparent 60%),
                      radial-gradient(ellipse 50% 50% at 60% 30%, rgba(0,229,160,0.06) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }

        .kiosk-wrapper { position: relative; z-index: 1; max-width: 1960px; margin: 0 auto; min-height: 100vh; display: flex; flex-direction: column; }

        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 32px;
          border-bottom: 1px solid var(--border);
          backdrop-filter: blur(12px);
          background: rgba(10,22,40,0.6);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo-area { display: flex; align-items: center; gap: 14px; }
        .logo-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 0 20px rgba(21,87,255,0.5);
        }
        .logo-text { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 20px; }
        .logo-text span { color: var(--cyan); }

        .header-right { display: flex; align-items: center; gap: 16px; }
        .lang-pill {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 6px 14px;
          font-size: 13px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }
        .lang-pill:hover { background: var(--glass2); }

        .time-display { font-size: 13px; color: var(--muted); font-variant-numeric: tabular-nums; }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 8px var(--green);
          animation: pulse-dot 2s infinite;
        }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.4} }

        .screen { flex: 1; padding: 32px; }

        .view { display: none; animation: fadeUp 0.4s ease; }
        .view.active { display: block; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .welcome-hero {
          text-align: center;
          padding: 40px 0 32px;
        }
        .welcome-hero .tagline {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--cyan);
          margin-bottom: 16px;
        }
        .welcome-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 14px;
        }
        .welcome-hero h1 em {
          font-style: normal;
          background: linear-gradient(90deg, var(--cyan), var(--blue));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .welcome-hero p {
          font-size: 16px;
          color: var(--muted);
          max-width: 500px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }

        .lang-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 36px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .lang-card {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 16px 12px;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s;
        }
        .lang-card:hover, .lang-card.selected {
          background: rgba(21,87,255,0.2);
          border-color: var(--blue);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(21,87,255,0.2);
        }
        .lang-card .native { font-size: 20px; margin-bottom: 4px; }
        .lang-card .english { font-size: 11px; color: var(--muted); }

        .cta-row { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 14px;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.25s;
          text-decoration: none;
        }
        .btn-primary {
          background: linear-gradient(135deg, var(--blue), #0A3FCC);
          color: #fff;
          box-shadow: 0 4px 24px rgba(21,87,255,0.4);
        }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(21,87,255,0.5); }
        .btn-ghost {
          background: var(--glass);
          border: 1px solid var(--border);
          color: var(--text);
        }
        .btn-ghost:hover { background: var(--glass2); transform: translateY(-2px); }

        .services-header { margin-bottom: 28px; }
        .services-header h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 6px;
        }
        .services-header p { font-size: 14px; color: var(--muted); }

        .greeting-strip {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 18px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .greeting-strip .greeting-left { display: flex; align-items: center; gap: 14px; }
        .avatar {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .greeting-name { font-size: 16px; font-weight: 600; }
        .greeting-sub { font-size: 12px; color: var(--muted); margin-top: 2px; }
        .balance-badge { text-align: right; }
        .balance-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
        .balance-amount { font-size: 22px; font-weight: 700; color: var(--green); margin-top: 2px; }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .service-card {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px 20px;
          cursor: pointer;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-accent, var(--blue));
          opacity: 0;
          transition: opacity 0.2s;
        }
        .service-card:hover::before { opacity: 1; }
        .service-card:hover {
          transform: translateY(-4px);
          background: var(--glass2);
          box-shadow: 0 12px 32px rgba(0,0,0,0.3);
        }

        .service-page-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .back-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid var(--border);
          background: var(--glass);
          color: var(--text);
          font-size: 18px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .back-btn:hover { background: var(--glass2); }

        .service-page-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 700;
        }
        .service-page-desc {
          font-size: 14px;
          color: var(--muted);
          margin-top: 4px;
        }

        .form-section {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          margin-bottom: 20px;
        }
        .form-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .form-row { display: flex; gap: 16px; margin-bottom: 16px; }
        .form-group { flex: 1; }
        .form-label { font-size: 12px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; display: block; }
        .form-input {
          width: 100%;
          background: var(--glass2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input:focus { border-color: var(--blue); }
        .form-input::placeholder { color: var(--muted); }

        .info-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 16px; }
        .info-card {
          background: rgba(21,87,255,0.08);
          border: 1px solid rgba(21,87,255,0.2);
          border-radius: 14px;
          padding: 16px;
        }
        .info-label { font-size: 11px; color: var(--muted); text-transform: uppercase; }
        .info-value { font-size: 16px; font-weight: 600; margin-top: 6px; }

        .video-container {
          width: 100%;
          max-width: 300px;
          margin: 0 auto 24px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid var(--cyan);
          aspect-ratio: 3/4;
        }
        .video-element {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scaleX(-1);
        }
        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 14px;
          background: var(--card-bg, rgba(21,87,255,0.15));
        }
        .card-title { font-size: 15px; font-weight: 600; margin-bottom: 4px; }
        .card-desc { font-size: 12px; color: var(--muted); line-height: 1.5; }
        .card-arrow {
          position: absolute;
          bottom: 18px;
          right: 18px;
          width: 28px;
          height: 28px;
          border-radius: 8px;
          background: var(--glass2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .service-card:hover .card-arrow { opacity: 1; }

        .chat-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 20px;
          height: calc(100vh - 200px);
          min-height: 500px;
        }

        .chat-main {
          display: flex;
          flex-direction: column;
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          overflow: hidden;
        }

        .chat-topbar {
          padding: 18px 20px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(13,31,60,0.5);
        }
        .bot-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--blue), var(--cyan));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 0 16px rgba(21,87,255,0.4);
          position: relative;
        }
        .bot-avatar::after {
          content: '';
          position: absolute;
          bottom: 1px;
          right: 1px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--green);
          border: 2px solid var(--navy);
        }
        .bot-info .name { font-size: 15px; font-weight: 600; }
        .bot-info .status { font-size: 12px; color: var(--green); }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          scrollbar-width: thin;
          scrollbar-color: var(--glass2) transparent;
        }

        .msg { display: flex; gap: 10px; max-width: 85%; }
        .msg.user { flex-direction: row-reverse; align-self: flex-end; }
        .msg.bot { align-self: flex-start; }

        .msg-bubble {
          padding: 12px 16px;
          border-radius: 16px;
          font-size: 14px;
          line-height: 1.6;
        }
        .msg.bot .msg-bubble {
          background: rgba(21,87,255,0.15);
          border: 1px solid rgba(21,87,255,0.25);
          border-bottom-left-radius: 4px;
        }
        .msg.user .msg-bubble {
          background: linear-gradient(135deg, var(--blue), #0A3FCC);
          border-bottom-right-radius: 4px;
        }
        .msg-time { font-size: 10px; color: var(--muted); margin-top: 4px; text-align: right; }

        .typing-indicator { display: flex; gap: 4px; align-items: center; padding: 4px 0; }
        .typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cyan);
          animation: typing 1.2s infinite;
        }
        .typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .typing-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes typing { 0%,60%,100%{opacity:0.2;transform:scale(0.8)} 30%{opacity:1;transform:scale(1)} }

        .quick-replies {
          padding: 12px 20px;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          background: rgba(13,31,60,0.4);
        }
        .chip {
          padding: 8px 14px;
          border-radius: 20px;
          border: 1px solid var(--border);
          background: var(--glass);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
          color: var(--text);
        }
        .chip:hover {
          border-color: var(--blue);
          background: rgba(21,87,255,0.15);
          color: #fff;
        }

        .chat-input-bar {
          padding: 16px 20px;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 12px;
          align-items: center;
          background: rgba(10,22,40,0.5);
        }
        .chat-input {
          flex: 1;
          background: var(--glass2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text);
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s;
        }
        .chat-input:focus { border-color: var(--blue); }
        .chat-input::placeholder { color: var(--muted); }

        .icon-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .mic-btn {
          background: linear-gradient(135deg,rgba(0,212,255,0.2),rgba(21,87,255,0.2));
          border: 1px solid rgba(0,212,255,0.3);
          color: var(--cyan);
        }
        .mic-btn:hover, .mic-btn.active {
          background: linear-gradient(135deg,var(--cyan),var(--blue));
          color: #fff;
          box-shadow: 0 0 20px rgba(0,212,255,0.4);
        }
        .send-btn {
          background: linear-gradient(135deg,var(--blue),#0A3FCC);
          color: #fff;
          box-shadow: 0 4px 16px rgba(21,87,255,0.4);
        }
        .send-btn:hover { transform: scale(1.05); }

        .chat-sidebar { display: flex; flex-direction: column; gap: 16px; }

        .panel {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 20px;
        }
        .panel-title {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--muted);
          margin-bottom: 14px;
        }

        .auth-row { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .auth-icon { font-size: 20px; }
        .auth-label { font-size: 13px; color: var(--muted); }
        .auth-value { font-size: 13px; font-weight: 600; margin-top: 2px; }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
        }
        .badge-green { background: rgba(0,229,160,0.15); color: var(--green); border: 1px solid rgba(0,229,160,0.3); }
        .badge-blue { background: rgba(21,87,255,0.15); color: var(--cyan); border: 1px solid rgba(21,87,255,0.3); }

        .txn-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid var(--border);
        }
        .txn-row:last-child { border-bottom: none; padding-bottom: 0; }
        .txn-left { display: flex; align-items: center; gap: 10px; }
        .txn-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--glass2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
        .txn-name { font-size: 13px; font-weight: 500; }
        .txn-date { font-size: 11px; color: var(--muted); }
        .txn-amount { font-size: 13px; font-weight: 600; }
        .txn-amount.cr { color: var(--green); }
        .txn-amount.dr { color: var(--red); }

        .waveform {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 3px;
          height: 40px;
          margin: 10px 0;
        }
        .wave-bar {
          width: 3px;
          border-radius: 2px;
          background: linear-gradient(180deg, var(--cyan), var(--blue));
          animation: wave 1.2s infinite ease-in-out;
        }
        @keyframes wave {
          0%,100%{height:4px;opacity:0.3}
          50%{height:32px;opacity:1}
        }

        .auth-screen { max-width: 480px; margin: 40px auto 0; text-align: center; }
        .auth-screen h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .auth-screen p { font-size: 14px; color: var(--muted); margin-bottom: 36px; }

        .auth-methods {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }
        .auth-method {
          background: var(--glass);
          border: 2px solid var(--border);
          border-radius: 16px;
          padding: 20px 12px;
          cursor: pointer;
          text-align: center;
          transition: all 0.2s;
        }
        .auth-method.selected {
          border-color: var(--blue);
          background: rgba(21,87,255,0.15);
        }
        .auth-method:hover { border-color: rgba(21,87,255,0.5); }
        .auth-method .icon { font-size: 32px; margin-bottom: 8px; }
        .auth-method .label { font-size: 13px; font-weight: 600; }
        .auth-method .sublabel { font-size: 11px; color: var(--muted); margin-top: 2px; }

        .face-scan-container {
          width: 200px;
          height: 200px;
          margin: 0 auto 28px;
          position: relative;
        }
        .face-outline {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          position: relative;
          overflow: hidden;
        }
        .scan-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--cyan), transparent);
          animation: scan 2s infinite linear;
          box-shadow: 0 0 10px var(--cyan);
        }
        @keyframes scan { from{top:0} to{top:100%} }
        .scan-corners {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .corner {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: var(--cyan);
          border-style: solid;
        }
        .corner.tl { top: 8px; left: 8px; border-width: 2px 0 0 2px; }
        .corner.tr { top: 8px; right: 8px; border-width: 2px 2px 0 0; }
        .corner.bl { bottom: 8px; left: 8px; border-width: 0 0 2px 2px; }
        .corner.br { bottom: 8px; right: 8px; border-width: 0 2px 2px 0; }

        .otp-container { display: flex; gap: 12px; justify-content: center; margin-bottom: 24px; }
        .otp-digit {
          width: 54px;
          height: 64px;
          background: var(--glass);
          border: 2px solid var(--border);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          font-weight: 700;
          transition: all 0.2s;
          cursor: pointer;
        }
        .otp-digit.filled { border-color: var(--blue); background: rgba(21,87,255,0.15); }

        .success-screen { max-width: 460px; margin: 40px auto; text-align: center; }
        .success-icon-wrap {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(0,229,160,0.15);
          border: 2px solid rgba(0,229,160,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 48px;
          margin: 0 auto 24px;
          animation: pop 0.5s cubic-bezier(0.175,0.885,0.32,1.275);
        }
        @keyframes pop { from{transform:scale(0)} to{transform:scale(1)} }
        .success-screen h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--green);
          margin-bottom: 8px;
        }
        .success-screen p { font-size: 15px; color: var(--muted); margin-bottom: 32px; }
        .receipt-card {
          background: var(--glass);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 24px;
          text-align: left;
          margin-bottom: 28px;
        }
        .receipt-row {
          display: flex;
          justify-content: space-between;
          padding: 8px 0;
          border-bottom: 1px solid var(--border);
          font-size: 13px;
        }
        .receipt-row:last-child { border-bottom: none; }
        .receipt-row .label { color: var(--muted); }
        .receipt-row .value { font-weight: 600; }

        .footer {
          padding: 16px 32px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(10,22,40,0.6);
        }
        .footer-nav { display: flex; gap: 8px; }
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid var(--border);
          background: var(--glass);
          color: var(--muted);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .nav-btn:hover { color: var(--text); background: var(--glass2); }
        .footer-help {
          font-size: 13px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .help-btn {
          padding: 8px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255,184,0,0.3);
          background: rgba(255,184,0,0.08);
          color: var(--gold);
          font-size: 13px;
          cursor: pointer;
          transition: all 0.2s;
        }
        .help-btn:hover { background: rgba(255,184,0,0.15); }

        .landing-section {
          padding: 60px 32px;
          display: flex;
          align-items: center;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .landing-section.alt { flex-direction: row-reverse; }
        .landing-content { flex: 1; }
        .landing-image { flex: 1; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
        .landing-image img { width: 100%; height: auto; display: block; }
        .feature-heading { font-size: 28px; font-weight: 700; margin-bottom: 12px; font-family: 'Space Grotesk', sans-serif; }
        .feature-desc { font-size: 15px; color: var(--muted); line-height: 1.6; margin-bottom: 20px; }
        .feature-list { list-style: none; margin: 20px 0; }
        .feature-list li { font-size: 14px; margin-bottom: 10px; display: flex; gap: 12px; align-items: flex-start; color: var(--text); }
        .feature-list li::before { content: '✓'; color: var(--green); font-weight: 700; flex-shrink: 0; }

        .stepper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-bottom: 36px;
        }
        .step {
          display: flex;
          align-items: center;
          gap: 0;
        }
        .step-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          border: 2px solid var(--border);
          color: var(--muted);
          transition: all 0.3s;
        }
        .step.done .step-circle { background: var(--green); border-color: var(--green); color: var(--navy); }
        .step.active .step-circle {
          background: linear-gradient(135deg,var(--blue),var(--cyan));
          border-color: var(--blue);
          color: #fff;
          box-shadow: 0 0 16px rgba(21,87,255,0.4);
        }
        .step-label { font-size: 11px; color: var(--muted); margin-top: 6px; white-space: nowrap; }
        .step-line {
          width: 48px;
          height: 2px;
          background: var(--border);
          margin: 0 4px;
          flex-shrink: 0;
        }
        .step-line.done { background: var(--green); }
        .step-wrap { text-align: center; }

        @media (max-width: 768px) {
          .screen { padding: 20px; }
          .service-grid { grid-template-columns: repeat(2, 1fr); }
          .chat-layout { grid-template-columns: 1fr; }
          .chat-sidebar { display: none; }
          .lang-grid { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="kiosk-wrapper">
        {/* HEADER */}
        <header className="header">
          <div className="logo-area">
            <div className="logo-icon">🏦</div>
            <div className="logo-text">
              BankBot <span>360</span>
            </div>
          </div>
          <div className="header-right">
            <select
              className="lang-pill"
              style={{
                cursor: "pointer",
                background: "grey",
                border: "1px solid var(--border)",
                color: "black",
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "13px",
                fontFamily: "inherit",
              }}
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
            >
              <option value="hindi">🌐 हिन्दी</option>
              <option value="english">🌐 English</option>
              <option value="bengali">🌐 বাংলা</option>
              <option value="tamil">🌐 தமிழ்</option>
              <option value="telugu">🌐 తెలుగు</option>
              <option value="marathi">🌐 मराठी</option>
              <option value="kannada">🌐 ಕನ್ನಡ</option>
              <option value="punjabi">🌐 ਪੰਜਾਬੀ</option>
            </select>
            <div className="time-display">{currentTime}</div>
            <div className="status-dot"></div>
          </div>
        </header>

        {/* MAIN SCREEN AREA */}
        <main className="screen">
          {/* WELCOME VIEW */}
          <div
            className={`view ${activeView === "welcome" ? "active" : ""}`}
            style={{
              padding: 0,
              overflowY: "auto",
              maxHeight: "calc(100vh - 200px)",
            }}
          >
            {/* HERO SECTION */}
            <div className="welcome-hero" style={{ padding: "60px 32px 40px" }}>
              <div className="tagline">{t("welcome_tagline")}</div>
              <h1>
                {t("welcome_title")}
                <br />
                <em>{t("welcome_subtitle")}</em>
              </h1>
              <p>{t("welcome_desc")}</p>

              <div className="lang-grid" style={{ marginBottom: "32px" }}>
                {[
                  { native: "हिन्दी", english: "Hindi" },
                  { native: "English", english: "English" },
                  { native: "বাংলা", english: "Bengali" },
                  { native: "தமிழ்", english: "Tamil" },
                  { native: "తెలుగు", english: "Telugu" },
                  { native: "मराठी", english: "Marathi" },
                  { native: "ಕನ್ನಡ", english: "Kannada" },
                  { native: "ਪੰਜਾਬੀ", english: "Punjabi" },
                ].map((lang, i) => (
                  <div
                    key={i}
                    className={`lang-card ${selectedLang === lang.english ? "selected" : ""}`}
                    onClick={() => setSelectedLang(lang.english)}
                  >
                    <div className="native">{lang.native}</div>
                    <div className="english">{lang.english}</div>
                  </div>
                ))}
              </div>

              <div className="cta-row">
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveView("auth")}
                >
                  {t("login_btn")}
                </button>
                <button
                  className="btn btn-ghost"
                  onClick={() => setActiveView("services")}
                >
                  👤 {t("guest_btn")}
                </button>
              </div>
            </div>

            {/* FEATURE 1: SECURITY */}
            <div className="landing-section">
              <div className="landing-content">
                <h2 className="feature-heading">
                  Advanced Security & Biometric Authentication
                </h2>
                <p className="feature-desc">
                  Your money is protected with military-grade encryption and
                  multiple authentication methods including Face ID, Voice ID,
                  and Fingerprint scanning.
                </p>
                <ul className="feature-list">
                  <li>Multi-factor authentication with biometric options</li>
                  <li>Real-time fraud detection and prevention</li>
                  <li>256-bit SSL encryption for all transactions</li>
                  <li>24/7 security monitoring</li>
                </ul>
              </div>
              <div className="landing-image">
                <img src="/security-feature.jpg" alt="Security Features" />
              </div>
            </div>

            {/* FEATURE 2: MULTILINGUAL */}
            <div className="landing-section alt">
              <div className="landing-content">
                <h2 className="feature-heading"> Banking in Your Language</h2>
                <p className="feature-desc">
                  Access banking services in 8 Indian languages. BankBot
                  understands your language preferences and communicates
                  naturally.
                </p>
                <ul className="feature-list">
                  <li>
                    Full interface in Hindi, English, Bengali, Tamil, and more
                  </li>
                  <li>Natural language processing for voice commands</li>
                  <li>Personalized communication based on your preferences</li>
                  <li>Real-time translation for documents</li>
                </ul>
              </div>
              <div className="landing-image">
                <img
                  src="/multilingual-feature.jpg"
                  alt="Multilingual Support"
                />
              </div>
            </div>

            {/* FEATURE 3: 24/7 SUPPORT */}
            <div className="landing-section">
              <div className="landing-content">
                <h2 className="feature-heading">
                  AI-Powered Support Available 24/7
                </h2>
                <p className="feature-desc">
                  Get instant help from our intelligent BankBot or connect with
                  a human agent anytime. No waiting, no complexity.
                </p>
                <ul className="feature-list">
                  <li>Instant responses to banking queries</li>
                  <li>Seamless transfer to human agents</li>
                  <li>Context-aware assistance</li>
                  <li>Available in your preferred language</li>
                </ul>
              </div>
              <div className="landing-image">
                <img src="/support-24-7.jpg" alt="24/7 Support" />
              </div>
            </div>

            {/* CTA SECTION */}
            <div
              style={{
                padding: "80px 32px",
                textAlign: "center",
                background:
                  "linear-gradient(135deg, rgba(21,87,255,0.1), rgba(0,212,255,0.05))",
                borderRadius: "20px",
                margin: "40px 32px",
              }}
            >
              <h2
                style={{
                  fontSize: "28px",
                  fontWeight: "700",
                  marginBottom: "12px",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                Ready to Experience Modern Banking?
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  color: "var(--muted)",
                  marginBottom: "28px",
                  maxWidth: "500px",
                  margin: "0 auto 28px",
                }}
              >
                Join thousands of users who have already switched to BankBot for
                a seamless, secure, and intelligent banking experience.
              </p>
              <div className="cta-row">
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveView("auth")}
                  style={{ padding: "18px 40px", fontSize: "16px" }}
                >
                  Get Started Now
                </button>
              </div>
            </div>

            {/* FOOTER INFO */}
            <div
              style={{
                padding: "40px 32px",
                textAlign: "center",
                borderTop: "1px solid var(--border)",
                color: "var(--muted)",
                fontSize: "12px",
              }}
            >
              <p>
                BankBot 360 is powered by Union Bank of India • Secure •
                Reliable • 24/7 Available
              </p>
            </div>
          </div>

          {/* AUTH VIEW */}
          <div className={`view ${activeView === "auth" ? "active" : ""}`}>
            <div className="stepper">
              <div className="step-wrap">
                <div className="step active">
                  <div className="step-circle">1</div>
                </div>
                <div className="step-label">Identify</div>
              </div>
              <div className="step-line"></div>
              <div className="step-wrap">
                <div className="step">
                  <div className="step-circle">2</div>
                </div>
                <div className="step-label">Verify</div>
              </div>
              <div className="step-line"></div>
              <div className="step-wrap">
                <div className="step">
                  <div className="step-circle">3</div>
                </div>
                <div className="step-label">Services</div>
              </div>
            </div>

            <div className="auth-screen">
              <h2>Verify Your Identity</h2>
              <p>
                Choose your preferred authentication method to securely access
                your account.
              </p>

              <div className="auth-methods">
                <div
                  className={`auth-method ${selectedAuth === "face" ? "selected" : ""}`}
                  onClick={() => setSelectedAuth("face")}
                >
                  <div className="icon">👁️</div>
                  <div className="label">Face ID</div>
                  <div className="sublabel">Look at camera</div>
                </div>
                <div
                  className={`auth-method ${selectedAuth === "aadhaar" ? "selected" : ""}`}
                  onClick={() => setSelectedAuth("aadhaar")}
                >
                  <div className="icon">🪪</div>
                  <div className="label">Aadhaar OTP</div>
                  <div className="sublabel">Mobile OTP</div>
                </div>
                <div
                  className={`auth-method ${selectedAuth === "voice" ? "selected" : ""}`}
                  onClick={() => setSelectedAuth("voice")}
                >
                  <div className="icon">🎙️</div>
                  <div className="label">Voice ID</div>
                  <div className="sublabel">Speak passphrase</div>
                </div>
              </div>

              {selectedAuth === "face" && (
                <div>
                  <div className="video-container">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="video-element"
                    />
                    <div className="scan-line"></div>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--cyan)",
                      marginBottom: "24px",
                    }}
                  >
                    Scanning face… please look straight at the camera
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      stopCamera();
                      setActiveView("services");
                    }}
                    style={{ margin: "0 auto", display: "flex" }}
                  >
                    Verify Face ID
                  </button>
                </div>
              )}

              {selectedAuth === "aadhaar" && (
                <div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--muted)",
                      marginBottom: "20px",
                    }}
                  >
                    OTP sent to •••••• 7823
                  </p>
                  <div className="otp-container">
                    <div className="otp-digit filled">4</div>
                    <div className="otp-digit filled">2</div>
                    <div className="otp-digit filled">8</div>
                    <div className="otp-digit">_</div>
                    <div className="otp-digit">_</div>
                    <div className="otp-digit">_</div>
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() => setActiveView("services")}
                    style={{ margin: "0 auto", display: "flex" }}
                  >
                    Verify OTP
                  </button>
                </div>
              )}

              {selectedAuth === "voice" && (
                <div>
                  <div className="waveform">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <div
                        key={i}
                        className="wave-bar"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          height: `${6 + Math.random() * 26}px`,
                        }}
                      ></div>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--cyan)",
                      marginBottom: "24px",
                    }}
                  >
                    Say: <em>"My name is Amit and I authorize this session"</em>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => setActiveView("services")}
                    style={{ margin: "0 auto", display: "flex" }}
                  >
                    Simulate Voice Match
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* SERVICES VIEW */}
          <div className={`view ${activeView === "services" ? "active" : ""}`}>
            <div className="greeting-strip">
              <div className="greeting-left">
                <div className="avatar">A</div>
                <div>
                  <div className="greeting-name">
                    Good morning, Amit Kumar 👋
                  </div>
                  <div className="greeting-sub">
                    Account •••• 4821 · Savings Account
                  </div>
                </div>
              </div>
              <div className="balance-badge">
                <div className="balance-label">Available Balance</div>
                <div className="balance-amount">₹ 54,230.00</div>
              </div>
            </div>

            <div className="services-header">
              <h2>What would you like to do today?</h2>
              <p>Select a service or say it aloud — BankBot is listening</p>
            </div>

            <div className="service-grid">
              {[
                {
                  icon: "",
                  title: "Chat with BankBot",
                  desc: "Ask anything in your language",
                  accent: "var(--blue)",
                  bg: "rgba(21,87,255,0.12)",
                  view: "chat",
                },
                {
                  icon: "💸",
                  title: "Fund Transfer",
                  desc: "NEFT · RTGS · IMPS · UPI",
                  accent: "var(--green)",
                  bg: "rgba(0,229,160,0.10)",
                  view: "transfer",
                },
                {
                  icon: "📄",
                  title: "Account Statement",
                  desc: "Download or print mini-statement",
                  accent: "var(--gold)",
                  bg: "rgba(255,184,0,0.10)",
                  view: "statement",
                },
                {
                  icon: "🏦",
                  title: "Loan & Credit",
                  desc: "Apply, check status, EMI details",
                  accent: "var(--cyan)",
                  bg: "rgba(0,212,255,0.10)",
                  view: "loan",
                },
                {
                  icon: "",
                  title: "Card Services",
                  desc: "Block/unblock, PIN change, limits",
                  accent: "#A855F7",
                  bg: "rgba(168,85,247,0.10)",
                  view: "card",
                },
                {
                  icon: "🧾",
                  title: "Fixed Deposits",
                  desc: "Open, renew, check interest",
                  accent: "var(--red)",
                  bg: "rgba(255,77,106,0.10)",
                  view: "deposits",
                },
              ].map((service, i) => (
                <div
                  key={i}
                  className="service-card"
                  style={
                    {
                      "--card-accent": service.accent,
                      "--card-bg": service.bg,
                    } as any
                  }
                  onClick={() => setActiveView(service.view)}
                >
                  <div className="card-icon">{service.icon}</div>
                  <div className="card-title">{service.title}</div>
                  <div className="card-desc">{service.desc}</div>
                  <div className="card-arrow">→</div>
                </div>
              ))}
            </div>
          </div>

          {/* CHAT VIEW */}
          <div className={`view ${activeView === "chat" ? "active" : ""}`}>
            <div className="chat-layout">
              <div className="chat-main">
                <div className="chat-topbar">
                  <div className="bot-avatar"></div>
                  <div className="bot-info">
                    <div className="name">BankBot 360</div>
                    <div className="status">● Online · Listening</div>
                  </div>
                </div>

                <div className="chat-messages">
                  {messages.map((msg, i) => (
                    <div key={i} className={`msg ${msg.role}`}>
                      <div>
                        <div className="msg-bubble">{msg.text}</div>
                        {msg.time && <div className="msg-time">{msg.time}</div>}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="msg bot">
                      <div className="msg-bubble">
                        <div className="typing-indicator">
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef}></div>
                </div>

                <div className="quick-replies">
                  {[
                    "₹1,000 Transfer",
                    "Check Balance",
                    "Mini Statement",
                    "Block Card",
                    "Talk to Agent",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="chip"
                      onClick={() => sendChip(text)}
                    >
                      {text}
                    </div>
                  ))}
                </div>

                <div className="chat-input-bar">
                  <button
                    className={`icon-btn mic-btn ${micActive ? "active" : ""}`}
                    onClick={toggleMic}
                    title="Voice input"
                  >
                    {micActive ? "🔴" : "🎙️"}
                  </button>
                  <input
                    className="chat-input"
                    type="text"
                    placeholder="Type or speak your query…"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                  />
                  <button
                    className="icon-btn send-btn"
                    onClick={sendMessage}
                    title="Send"
                  >
                    ➤
                  </button>
                </div>
              </div>

              <div className="chat-sidebar">
                <div className="panel">
                  <div className="panel-title">Session Status</div>
                  <div className="auth-row">
                    <div className="auth-icon">👤</div>
                    <div>
                      <div className="auth-label">Identity</div>
                      <div className="auth-value">
                        Amit Kumar{" "}
                        <span className="badge badge-green">✓ Verified</span>
                      </div>
                    </div>
                  </div>
                  <div className="auth-row">
                    <div className="auth-icon"></div>
                    <div>
                      <div className="auth-label">Auth Method</div>
                      <div className="auth-value">
                        <span className="badge badge-blue">👁️ Face ID</span>
                      </div>
                    </div>
                  </div>
                  <div className="auth-row">
                    <div className="auth-icon">🕐</div>
                    <div>
                      <div className="auth-label">Session expires in</div>
                      <div
                        className="auth-value"
                        style={{ color: "var(--gold)" }}
                      >
                        {sessionTime}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="panel">
                  <div className="panel-title">Voice Activity</div>
                  <div className="waveform">
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                      <div
                        key={i}
                        className="wave-bar"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      ></div>
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--cyan)",
                      textAlign: "center",
                    }}
                  >
                    Listening for Hindi / English…
                  </p>
                </div>

                <div className="panel">
                  <div className="panel-title">Recent Transactions</div>
                  {[
                    {
                      icon: "📱",
                      name: "UPI – Zomato",
                      date: "Today, 9:14 AM",
                      amount: "−₹320",
                      type: "dr",
                    },
                    {
                      icon: "💼",
                      name: "Salary Credit",
                      date: "1 Mar, 12:00 PM",
                      amount: "+₹62,000",
                      type: "cr",
                    },
                    {
                      icon: "🏠",
                      name: "EMI – Home Loan",
                      date: "28 Feb",
                      amount: "−₹18,500",
                      type: "dr",
                    },
                  ].map((txn, i) => (
                    <div key={i} className="txn-row">
                      <div className="txn-left">
                        <div className="txn-icon">{txn.icon}</div>
                        <div>
                          <div className="txn-name">{txn.name}</div>
                          <div className="txn-date">{txn.date}</div>
                        </div>
                      </div>
                      <div className={`txn-amount ${txn.type}`}>
                        {txn.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SUCCESS VIEW */}
          <div className={`view ${activeView === "success" ? "active" : ""}`}>
            <div className="success-screen">
              <div className="success-icon-wrap"></div>
              <h2>Transfer Successful!</h2>
              <p>Your transaction has been processed securely.</p>

              <div className="receipt-card">
                <div className="receipt-row">
                  <span className="label">Transaction ID</span>
                  <span className="value">UPI/260303/10:33/TXN7821K</span>
                </div>
                <div className="receipt-row">
                  <span className="label">Amount</span>
                  <span className="value" style={{ color: "var(--green)" }}>
                    ₹ 5,000.00
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">Beneficiary</span>
                  <span className="value">Priya Sharma</span>
                </div>
                <div className="receipt-row">
                  <span className="label">Method</span>
                  <span className="value">UPI (Instant)</span>
                </div>
                <div className="receipt-row">
                  <span className="label">Status</span>
                  <span className="value">
                    <span className="badge badge-green">✓ Success</span>
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">Date & Time</span>
                  <span className="value">03 Mar 2026, 10:33 AM</span>
                </div>
              </div>

              <div className="cta-row">
                <button
                  className="btn btn-ghost"
                  onClick={() => setActiveView("services")}
                >
                  Back to Home
                </button>
                <button className="btn btn-primary">🖨️ Print Receipt</button>
              </div>
            </div>
          </div>

          {/* FUND TRANSFER PAGE */}
          <div className={`view ${activeView === "transfer" ? "active" : ""}`}>
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("services")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">Fund Transfer</div>
                <div className="service-page-desc">
                  Send money securely via NEFT, RTGS, IMPS, or UPI
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Select Transfer Method</div>
              <div className="info-grid">
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    border: "2px solid var(--cyan)",
                    background: "rgba(0,212,255,0.15)",
                  }}
                >
                  <div className="info-label">UPI Transfer</div>
                  <div className="info-value" style={{ color: "var(--cyan)" }}>
                    Instant
                  </div>
                </button>
                <button className="info-card" style={{ cursor: "pointer" }}>
                  <div className="info-label">NEFT</div>
                  <div className="info-value">30 mins - 2 hours</div>
                </button>
                <button className="info-card" style={{ cursor: "pointer" }}>
                  <div className="info-label">RTGS</div>
                  <div className="info-value">15 mins - 1 hour</div>
                </button>
                <button className="info-card" style={{ cursor: "pointer" }}>
                  <div className="info-label">IMPS</div>
                  <div className="info-value">Instant</div>
                </button>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Beneficiary Details</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Beneficiary Name</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Mobile / Account</label>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="9876543210 or AAAA0000A"
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Transfer Amount</div>
              <div className="form-group">
                <label className="form-label">Amount (₹)</label>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
              <div className="info-grid" style={{ marginTop: "16px" }}>
                <div className="info-card">
                  <div className="info-label">Available Balance</div>
                  <div className="info-value" style={{ color: "var(--green)" }}>
                    ₹ 54,230
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-label">Daily Limit</div>
                  <div className="info-value">₹ 1,00,000</div>
                </div>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => setActiveView("transfer-confirm")}
              >
                ➤ {t("proceed")}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("back")}
              </button>
            </div>
          </div>

          {/* ACCOUNT STATEMENT PAGE */}
          <div className={`view ${activeView === "statement" ? "active" : ""}`}>
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("services")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">Account Statement</div>
                <div className="service-page-desc">
                  Download or print your transaction history
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Select Period</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">From Date</label>
                  <input className="form-input" type="date" />
                </div>
                <div className="form-group">
                  <label className="form-label">To Date</label>
                  <input className="form-input" type="date" />
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Recent Transactions</div>
              {[
                {
                  icon: "📱",
                  name: "UPI – Zomato",
                  date: "Today, 9:14 AM",
                  amount: "−₹320",
                  type: "dr",
                },
                {
                  icon: "💼",
                  name: "Salary Credit",
                  date: "1 Mar, 12:00 PM",
                  amount: "+₹62,000",
                  type: "cr",
                },
                {
                  icon: "🏠",
                  name: "EMI – Home Loan",
                  date: "28 Feb",
                  amount: "−₹18,500",
                  type: "dr",
                },
                {
                  icon: "🛒",
                  name: "Amazon Purchase",
                  date: "27 Feb",
                  amount: "−₹4,299",
                  type: "dr",
                },
                {
                  icon: "💳",
                  name: "Credit Card Payment",
                  date: "25 Feb",
                  amount: "+₹25,000",
                  type: "cr",
                },
              ].map((txn, i) => (
                <div key={i} className="txn-row">
                  <div className="txn-left">
                    <div className="txn-icon">{txn.icon}</div>
                    <div>
                      <div className="txn-name">{txn.name}</div>
                      <div className="txn-date">{txn.date}</div>
                    </div>
                  </div>
                  <div className={`txn-amount ${txn.type}`}>{txn.amount}</div>
                </div>
              ))}
            </div>

            <div className="cta-row">
              <button className="btn btn-primary">
                📥 {t("download_pdf")}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("back")}
              </button>
            </div>
          </div>

          {/* LOAN & CREDIT PAGE */}
          <div className={`view ${activeView === "loan" ? "active" : ""}`}>
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("services")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">Loan & Credit</div>
                <div className="service-page-desc">
                  Apply for loans or check your credit status
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Current Loans</div>
              {[
                {
                  name: "Home Loan",
                  amount: "₹45,00,000",
                  emi: "₹18,500",
                  status: "Active",
                  remaining: "₹32,50,000",
                },
                {
                  name: "Personal Loan",
                  amount: "₹5,00,000",
                  emi: "₹12,500",
                  status: "Active",
                  remaining: "₹1,25,000",
                },
              ].map((loan, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "16px",
                    padding: "14px",
                    background: "var(--glass2)",
                    borderRadius: "12px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "8px",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>{loan.name}</div>
                    <span className="badge badge-green">✓ {loan.status}</span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                      fontSize: "12px",
                      color: "var(--muted)",
                    }}
                  >
                    <div>Principal: {loan.amount}</div>
                    <div>EMI: {loan.emi}</div>
                    <div>Remaining: {loan.remaining}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="form-section">
              <div className="form-title">Apply for New Loan</div>
              <div className="form-group">
                <label className="form-label">Loan Type</label>
                <select className="form-input">
                  <option>Select Loan Type</option>
                  <option>Personal Loan</option>
                  <option>Auto Loan</option>
                  <option>Education Loan</option>
                  <option>Home Loan</option>
                </select>
              </div>
              <div className="form-group" style={{ marginTop: "12px" }}>
                <label className="form-label">Loan Amount Needed</label>
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter amount"
                />
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => setActiveView("loan-status")}
              >
                ➤ {t("apply")}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("back")}
              </button>
            </div>
          </div>

          {/* CARD SERVICES PAGE */}
          <div className={`view ${activeView === "card" ? "active" : ""}`}>
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("services")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">Card Services</div>
                <div className="service-page-desc">
                  Manage your cards and settings
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Your Cards</div>
              {[
                {
                  type: "Credit Card",
                  last4: "4532",
                  status: "Active",
                  balance: "₹12,450",
                },
                {
                  type: "Debit Card",
                  last4: "7821",
                  status: "Active",
                  balance: "N/A",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "16px",
                    padding: "16px",
                    background:
                      "linear-gradient(135deg, rgba(21,87,255,0.15), rgba(0,212,255,0.10))",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "12px",
                    }}
                  >
                    <div style={{ fontWeight: "600" }}>{card.type}</div>
                    <span className="badge badge-green">✓ {card.status}</span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(2, 1fr)",
                      gap: "12px",
                      fontSize: "14px",
                    }}
                  >
                    <div>
                      <span style={{ color: "var(--muted)" }}>
                        Card Number:
                      </span>{" "}
                      •••• {card.last4}
                    </div>
                    <div>
                      <span style={{ color: "var(--muted)" }}>Balance:</span>{" "}
                      {card.balance}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="form-section">
              <div className="form-title">Quick Actions</div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "12px",
                }}
              >
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}></div>
                  <div className="info-label">Block Card</div>
                  <div
                    className="info-value"
                    style={{ fontSize: "14px", marginTop: "4px" }}
                  >
                    Temporary block
                  </div>
                </button>
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    🔑
                  </div>
                  <div className="info-label">Change PIN</div>
                  <div
                    className="info-value"
                    style={{ fontSize: "14px", marginTop: "4px" }}
                  >
                    Update your PIN
                  </div>
                </button>
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    💰
                  </div>
                  <div className="info-label">Set Limit</div>
                  <div
                    className="info-value"
                    style={{ fontSize: "14px", marginTop: "4px" }}
                  >
                    Transaction limit
                  </div>
                </button>
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    📱
                  </div>
                  <div className="info-label">Contactless</div>
                  <div
                    className="info-value"
                    style={{ fontSize: "14px", marginTop: "4px" }}
                  >
                    Enable/disable
                  </div>
                </button>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => setActiveView("card-manage")}
              >
                ⚙️ {t("manage")}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("back")}
              </button>
            </div>
          </div>

          {/* FIXED DEPOSITS PAGE */}
          <div className={`view ${activeView === "deposits" ? "active" : ""}`}>
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("services")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">Fixed Deposits</div>
                <div className="service-page-desc">
                  Open, renew, or check your FDs
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">Current Fixed Deposits</div>
              {[
                {
                  amount: "₹5,00,000",
                  rate: "7.25%",
                  tenure: "24 months",
                  maturity: "28 Feb 2028",
                  status: "Active",
                },
                {
                  amount: "₹2,00,000",
                  rate: "6.85%",
                  tenure: "12 months",
                  maturity: "15 Jan 2027",
                  status: "Maturing Soon",
                },
              ].map((fd, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "16px",
                    padding: "16px",
                    background: "var(--glass2)",
                    borderRadius: "14px",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "12px",
                    }}
                  >
                    <div style={{ fontWeight: "600", fontSize: "18px" }}>
                      {fd.amount}
                    </div>
                    <span
                      className={`badge ${fd.status === "Active" ? "badge-green" : "badge-blue"}`}
                    >
                      {fd.status}
                    </span>
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "8px",
                      fontSize: "12px",
                      color: "var(--muted)",
                    }}
                  >
                    <div>Rate: {fd.rate}</div>
                    <div>Tenure: {fd.tenure}</div>
                    <div>Matures: {fd.maturity}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="form-section">
              <div className="form-title">Open New FD</div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Amount</label>
                  <input
                    className="form-input"
                    type="number"
                    placeholder="Minimum ₹1,000"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Tenure (Months)</label>
                  <input
                    className="form-input"
                    type="number"
                    placeholder="6, 12, 24, 36..."
                  />
                </div>
              </div>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-label">Current Rate</div>
                  <div className="info-value" style={{ color: "var(--green)" }}>
                    7.50% p.a.
                  </div>
                </div>
                <div className="info-card">
                  <div className="info-label">Maturity Amount</div>
                  <div className="info-value">₹ 0</div>
                </div>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => setActiveView("fd-confirm")}
              >
                ➤ {t("open")}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("back")}
              </button>
            </div>
          </div>

          {/* TRANSFER CONFIRMATION PAGE */}
          <div
            className={`view ${activeView === "transfer-confirm" ? "active" : ""}`}
          >
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("transfer")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">
                  {t("confirmation_title")}
                </div>
                <div className="service-page-desc">{t("confirm_details")}</div>
              </div>
            </div>

            <div
              className="form-section"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <div className="form-title">{t("transaction_details")}</div>
              <div className="receipt-card">
                <div className="receipt-row">
                  <span className="label">{t("beneficiary_name")}</span>
                  <span className="value">Priya Sharma</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("amount")}</span>
                  <span className="value" style={{ color: "var(--green)" }}>
                    ₹ 5,000.00
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("method")}</span>
                  <span className="value">UPI ({t("instant")})</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("fee")}</span>
                  <span className="value">{t("free")}</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("total")}</span>
                  <span
                    className="value"
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "var(--blue)",
                    }}
                  >
                    ₹ 5,000.00
                  </span>
                </div>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => setActiveView("transfer-success")}
              >
                ✓ {t("confirm_btn")}
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("transfer")}
              >
                {t("cancel")}
              </button>
            </div>
          </div>

          {/* TRANSFER SUCCESS PAGE */}
          <div
            className={`view ${activeView === "transfer-success" ? "active" : ""}`}
          >
            <div className="success-screen">
              <div className="success-icon-wrap">✓</div>
              <h2 style={{ color: "var(--green)" }}>{t("transfer_success")}</h2>
              <p>{t("successful")}</p>

              <div className="receipt-card">
                <div className="receipt-row">
                  <span className="label">{t("transaction_id")}</span>
                  <span className="value">UPI/260303/10:33/TXN7821K</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("amount")}</span>
                  <span className="value" style={{ color: "var(--green)" }}>
                    ₹ 5,000.00
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("beneficiary_name")}</span>
                  <span className="value">Priya Sharma</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("method")}</span>
                  <span className="value">UPI (तत्काल)</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("status")}</span>
                  <span className="value">
                    <span className="badge badge-green">✓ {t("success")}</span>
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("date_time")}</span>
                  <span className="value">03 मार 2026, 10:33 AM</span>
                </div>
              </div>

              <div className="cta-row">
                <button
                  className="btn btn-ghost"
                  onClick={() => setActiveView("services")}
                >
                  होम
                </button>
                <button className="btn btn-primary">🖨️ {t("print")}</button>
              </div>
            </div>
          </div>

          {/* LOAN APPLICATION STATUS PAGE */}
          <div
            className={`view ${activeView === "loan-status" ? "active" : ""}`}
          >
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("loan")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">
                  {t("application_submitted")}
                </div>
                <div className="service-page-desc">{t("app_status")}</div>
              </div>
            </div>

            <div
              className="form-section"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <div className="form-title">{t("application_details")}</div>
              <div
                style={{
                  padding: "20px",
                  background: "rgba(0,212,255,0.1)",
                  borderRadius: "14px",
                  border: "1px solid rgba(0,212,255,0.2)",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ fontWeight: "600" }}>{t("loan_type")}</div>
                  <span className="badge badge-blue">{t("in_review")}</span>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "12px",
                    fontSize: "14px",
                  }}
                >
                  <div>
                    <span style={{ color: "var(--muted)" }}>
                      {t("requested_amount")}:
                    </span>{" "}
                    ₹ 5,00,000
                  </div>
                  <div>
                    <span style={{ color: "var(--muted)" }}>
                      {t("tenure")}:
                    </span>{" "}
                    5 साल
                  </div>
                  <div>
                    <span style={{ color: "var(--muted)" }}>
                      {t("application_id")}:
                    </span>{" "}
                    LN/260303/0087
                  </div>
                  <div>
                    <span style={{ color: "var(--muted)" }}>
                      {t("proposed_rate")}:
                    </span>{" "}
                    9.50%
                  </div>
                </div>
              </div>

              <div className="stepper">
                <div className="step-wrap">
                  <div className="step done">
                    <div className="step-circle">✓</div>
                  </div>
                  <div className="step-label">
                    {t("application_submitted_step")}
                  </div>
                </div>
                <div className="step-line done"></div>
                <div className="step-wrap">
                  <div className="step active">
                    <div className="step-circle">2</div>
                  </div>
                  <div className="step-label">{t("document_verification")}</div>
                </div>
                <div className="step-line"></div>
                <div className="step-wrap">
                  <div className="step">
                    <div className="step-circle">3</div>
                  </div>
                  <div className="step-label">{t("approval")}</div>
                </div>
              </div>

              <div
                style={{
                  padding: "16px",
                  background: "var(--glass)",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  marginTop: "20px",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--muted)",
                    marginBottom: "8px",
                  }}
                >
                  {t("next_step")}
                </div>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>
                  {t("documents_being_verified")}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--muted)",
                    marginTop: "8px",
                  }}
                >
                  {t("estimated_time")}: 2-3 {t("working_days")}
                </div>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("home")}
              </button>
              <button className="btn btn-primary">
                📞 {t("contact_agent")}
              </button>
            </div>
          </div>

          {/* CARD MANAGEMENT PAGE */}
          <div
            className={`view ${activeView === "card-manage" ? "active" : ""}`}
          >
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("card")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">{t("card_management")}</div>
                <div className="service-page-desc">
                  {t("manage_card_settings")}
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-title">{t("select_card")}</div>
              {[
                { type: "क्रेडिट कार्ड", last4: "4532" },
                { type: "डेबिट कार्ड", last4: "7821" },
              ].map((card, i) => (
                <button
                  key={i}
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "16px",
                    marginBottom: "12px",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <div className="info-label">{card.type}</div>
                    <div className="info-value">•••• {card.last4}</div>
                  </div>
                  <div>→</div>
                </button>
              ))}
            </div>

            <div className="form-section">
              <div className="form-title">
                {t("card_settings")} (डेबिट कार्ड •••• 7821)
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}></div>
                  <div className="info-label">{t("block_card_action")}</div>
                </button>
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    🔑
                  </div>
                  <div className="info-label">{t("change_pin_action")}</div>
                </button>
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    💰
                  </div>
                  <div className="info-label">{t("set_limit_action")}</div>
                </button>
                <button
                  className="info-card"
                  style={{
                    cursor: "pointer",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "8px" }}>
                    📱
                  </div>
                  <div className="info-label">{t("enable_contactless")}</div>
                </button>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("services")}
              >
                {t("home")}
              </button>
              <button className="btn btn-primary">✓ {t("complete")}</button>
            </div>
          </div>

          {/* FD CONFIRMATION PAGE */}
          <div
            className={`view ${activeView === "fd-confirm" ? "active" : ""}`}
          >
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("deposits")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">
                  {t("confirmation_title")}
                </div>
                <div className="service-page-desc">{t("confirm_details")}</div>
              </div>
            </div>

            <div
              className="form-section"
              style={{ maxWidth: "500px", margin: "0 auto" }}
            >
              <div className="form-title">{t("current_fds")}</div>
              <div className="receipt-card">
                <div className="receipt-row">
                  <span className="label">राशि</span>
                  <span className="value">₹ 5,00,000</span>
                </div>
                <div className="receipt-row">
                  <span className="label">अवधि</span>
                  <span className="value">24 महीने</span>
                </div>
                <div className="receipt-row">
                  <span className="label">दर</span>
                  <span className="value" style={{ color: "var(--green)" }}>
                    7.50% प्रति वर्ष
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">परिपक्वता तारीख</span>
                  <span className="value">03 मार 2028</span>
                </div>
                <div className="receipt-row">
                  <span className="label">परिपक्वता राशि</span>
                  <span
                    className="value"
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      color: "var(--blue)",
                    }}
                  >
                    ₹ 5,91,250
                  </span>
                </div>
              </div>
            </div>

            <div className="cta-row">
              <button
                className="btn btn-primary"
                onClick={() => setActiveView("fd-success")}
              >
                ✓ FD खोलें
              </button>
              <button
                className="btn btn-ghost"
                onClick={() => setActiveView("deposits")}
              >
                रद्द करें
              </button>
            </div>
          </div>

          {/* FD SUCCESS PAGE */}
          <div
            className={`view ${activeView === "fd-success" ? "active" : ""}`}
          >
            <div className="success-screen">
              <div className="success-icon-wrap">✓</div>
              <h2 style={{ color: "var(--green)" }}>{t("fd_opened")}</h2>
              <p>{t("fd_opened_desc")}</p>

              <div className="receipt-card">
                <div className="receipt-row">
                  <span className="label">{t("fd_number")}</span>
                  <span className="value">FD/260303/00456</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("amount")}</span>
                  <span className="value" style={{ color: "var(--green)" }}>
                    ₹ 5,00,000.00
                  </span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("current_rate")}</span>
                  <span className="value">7.50% {t("p_a")}</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("maturity_date")}</span>
                  <span className="value">03 मार 2028</span>
                </div>
                <div className="receipt-row">
                  <span className="label">{t("maturity_amount")}</span>
                  <span
                    className="value"
                    style={{ color: "var(--green)", fontWeight: "700" }}
                  >
                    ₹ 5,91,250.00
                  </span>
                </div>
              </div>

              <div className="cta-row">
                <button
                  className="btn btn-ghost"
                  onClick={() => setActiveView("services")}
                >
                  {t("home")}
                </button>
                <button className="btn btn-primary">
                  📥 {t("download_fd_doc")}
                </button>
              </div>
            </div>
          </div>

          {/* CALL AGENT PAGE */}
          <div
            className={`view ${activeView === "call-agent" ? "active" : ""}`}
          >
            <div className="service-page-header">
              <button
                className="back-btn"
                onClick={() => setActiveView("services")}
              >
                ←
              </button>
              <div>
                <div className="service-page-title">{t("connect_agent")}</div>
                <div className="service-page-desc">
                  {t("talk_with_support")}
                </div>
              </div>
            </div>

            <div
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                padding: "40px 20px",
              }}
            >
              <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <div
                  style={{
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(21,87,255,0.2))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "48px",
                    margin: "0 auto",
                    marginBottom: "20px",
                    border: "2px solid var(--border)",
                  }}
                >
                  🎧
                </div>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "700",
                    marginBottom: "8px",
                  }}
                >
                  {t("connecting")}
                </h2>
                <p style={{ fontSize: "14px", color: "var(--muted)" }}>
                  {t("please_wait")}
                </p>
              </div>

              <div className="form-section">
                <div className="form-title">{t("agent_info")}</div>
                <div
                  style={{
                    display: "flex",
                    gap: "16px",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, var(--blue), var(--cyan))",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "28px",
                    }}
                  >
                    👨‍💼
                  </div>
                  <div>
                    <div style={{ fontWeight: "600", fontSize: "16px" }}>
                      राज कुमार
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        color: "var(--muted)",
                        marginTop: "2px",
                      }}
                    >
                      {t("senior_representative")}
                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "var(--green)",
                        marginTop: "4px",
                      }}
                    >
                      ● {t("online")} - उपलब्ध
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-section">
                <div className="form-title">{t("your_info")}</div>
                <div
                  style={{
                    padding: "14px",
                    background: "var(--glass2)",
                    borderRadius: "12px",
                    fontSize: "14px",
                  }}
                >
                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ color: "var(--muted)" }}>{t("name")}:</span>{" "}
                    <strong>Amit Kumar</strong>
                  </div>
                  <div style={{ marginBottom: "8px" }}>
                    <span style={{ color: "var(--muted)" }}>
                      {t("account")}:
                    </span>{" "}
                    <strong>•••• 4821</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--muted)" }}>
                      {t("call_status")}:
                    </span>{" "}
                    <strong>{currentTime}</strong>
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "20px",
                  background: "rgba(0,212,255,0.1)",
                  borderRadius: "14px",
                  border: "1px solid rgba(0,212,255,0.2)",
                  marginTop: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--muted)",
                    marginBottom: "8px",
                  }}
                >
                  {t("call_status")}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "var(--cyan)",
                    marginBottom: "12px",
                  }}
                >
                  ⏱️ 00:45 {t("seconds")}
                </div>
                <div style={{ fontSize: "12px", color: "var(--muted)" }}>
                  {t("call_in_progress")}
                </div>
              </div>

              <div className="cta-row" style={{ marginTop: "32px" }}>
                <button
                  className="btn btn-ghost"
                  onClick={() => setActiveView("services")}
                >
                  ↩️ {t("go_back")}
                </button>
                <button
                  className="btn btn-primary"
                  style={{
                    background: "var(--red)",
                    boxShadow: "0 4px 16px rgba(255,77,106,0.4)",
                  }}
                >
                  📞 {t("end_call")}
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER NAV */}
        <footer className="footer">
          <div className="footer-nav">
            <button
              className="nav-btn"
              onClick={() => setActiveView("welcome")}
            >
              Home
            </button>
            <button
              className="nav-btn"
              onClick={() => setActiveView("services")}
            >
              Services
            </button>
            <button className="nav-btn" onClick={() => setActiveView("chat")}>
              BankBot
            </button>
          </div>
          <div className="footer-help">
            <span>Need help?</span>
            <button
              className="help-btn"
              onClick={() => setActiveView("call-agent")}
            >
              🧑‍💼 {t("call_agent")}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
