import React, { useRef } from 'react'
import { useLocation } from 'react-router-dom';
import Navforwithout from '../../../Navforwithout';

const ReviewBooking = () => {

    //scroll to policies
    const policiesRef = useRef(null);
    const scrollToPolicies = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const location = useLocation();
    const { state } = location
    const { 
      origin, destination, departDate, returnDate,
      shipName, shipClass, 
      departTime, arrivalTime, 
      adultFare, infantFare,
      adultDetails, infantDetails, 
      travellerDetails, contactDetails,
      tripSummaries
    } 
    = state 

    //calculating fares
    const totalAdultFare = travellerDetails.adult * adultFare
    const totalInfantFare = travellerDetails.adult * infantFare
    const totalFare = totalAdultFare + totalInfantFare
    let totalTripFare = totalFare
    if(tripSummaries.length === 2){
      totalTripFare = 2 * totalFare
    }

    //display adults
    const adultsData = adultDetails.map((adult, index) => 
    <div key={index}>
        <h1 className='font-bold mt-5 mb-3'>Adult {index+1}</h1>

        <div className='flex flex-col gap-3 text-sm'>
        <div>
        <label htmlFor='title'>Title</label>
        <select 
            id='title' 
            name='title'  
            value={adult.title}  
            // onChange={(event) => adultChangeHandler(event, index)}      
            className='p-1 border border-gray-300 ml-[55px]' 
            required          
        >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Master">Master</option>
            <option value="Miss">Miss</option>
            <option value="Mrs">Mrs</option>
        </select>
        </div>

        <div>
        <label htmlFor='name'>Full Name</label>
        <input
            type="text"
            id="name"
            name="name"      
            value={adult.name}  
            // onChange={(event) => adultChangeHandler(event, index)}             
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[16px]"
            required
        />
        </div>

        <div>
        <label htmlFor='age'>Age</label>
        <input
            type="text"
            id="age"
            name="age"    
            value={adult.age}  
            // onChange={(event) => adultChangeHandler(event, index)}              
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[55px]"
            required
        />
        </div>

        <div>
        <label htmlFor='gender'>Gender</label>
        <select 
        id='gender' 
        name='gender' 
        value={adult.gender}  
        //   onChange={(event) => adultChangeHandler(event, index)}
        className='p-1 border border-gray-300 ml-[35px]' 
        required
        >
        <option value="">Select</option>
        <option value="Male" selected>Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>                  
        </select>
        </div>

        <div>
        <label htmlFor='country'>Nationality</label>
        <select 
            id="country" 
            name="nationality" 
            value={adult.nationality}  
            // onChange={(event) => adultChangeHandler(event, index)}
            required 
            className='p-1 border border-gray-300 w-32 ml-3'
            >                      
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the Congo</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN" selected>India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.s.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
        </select>
        </div>

        </div>
    </div>
    )
    //display infants  
    const infantsData = infantDetails.map((infant, index) => 
      <div key={index}>
        <h1 className='font-bold mt-5 mb-3'>Infant {index+1}</h1>

        <div className='flex flex-col gap-3 text-sm'>
        <div>
          <label htmlFor='title'>Title</label>
          <select 
            id='title' 
            name='title'
            value={infant.title}  
            // onChange={(event) => infantChangeHandler(event, index)}
            className='p-1 border border-gray-300 ml-[55px]' 
            required
          >
            <option value="">Select</option>          
            <option value="Master">Master</option>
            <option value="Miss">Miss</option>          
          </select>
        </div>

        <div>
          <label htmlFor='name'>Full Name</label>
          <input
            type="text"
            id="name"
            name='name'
            value={infant.name}  
            // onChange={(event) => infantChangeHandler(event, index)}                  
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[16px]"
            required
          />
        </div>

        <div>
          <label htmlFor='age'>Age</label>
          <input
            type="text"
            id="age"
            name='age'
            value={infant.age}  
            // onChange={(event) => infantChangeHandler(event, index)}                  
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[55px]"
            required
          />
        </div>

        <div>
        <label htmlFor='gender'>Gender</label>
        <select 
          id='gender' 
          name='gender'
          value={infant.gender}  
        //   onChange={(event) => infantChangeHandler(event, index)}
          className='p-1 border border-gray-300 ml-[35px]' 
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>                  
        </select>
        </div>

        <div>
          <label htmlFor='country'>Nationality</label>
          <select 
            id="country" 
            name='nationality'
            value={infant.nationality}  
            // onChange={(event) => infantChangeHandler(event, index)}
            required 
            className='p-1 border border-gray-300 w-32 ml-3'>                      
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the Congo</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN" selected>India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.s.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
          </select>
        </div>

        </div>
      </div>
    ) 
    
    //display tripSummaries
  const tripData = tripSummaries.map((trip, index) => {
    return <div key={index}>

    <div className='flex gap-3 mt-4 mb-2 text-[15px]'>
      <h1 className='border-b border-black font-bold'>Trip-{index+1}:</h1>
      <h1 className='font-bold'>{index === 1 ? trip.returnOrigin : trip.origin} -&gt; {index === 1 ? trip.returnDestination : trip.destination}</h1>  
    </div>

    <div className='flex flex-col gap-1 text-sm ml-1'>
    <div className='flex gap-2'>
      <h1>Date: </h1>
      <h1 className='font-bold'>{index === 1 ? trip.returnDate.slice(3) : trip.departDate.slice(3)}</h1>  
    </div>

    <div className='flex gap-2'>
      <h1>Time: </h1>
      <h1 className='font-bold'>{trip.departTime} to {trip.arrivalTime}</h1>  
    </div>

    <div className='flex gap-2'>
      <h1>Ferry: </h1>
      <h1 className='font-bold'>{trip.shipName}(<span className='italic font-normal'>{trip.shipClass} Class</span>)</h1>  
    </div>

    <div className='flex flex-wrap gap-x-2'>
      <h1>Total Fare: </h1>
      <h1 className='font-bold'>
      {trip.travellerDetails.adult} x Adult(₹ {trip.adultFare})
      {trip.travellerDetails.infant !== 0 ? 
        <span> + {trip.travellerDetails.infant} x Infant(₹ {trip.infantFare})
        </span> 
        : 
        "" 
      }
      <span> = ₹ {(trip.travellerDetails.adult * trip.adultFare) + (trip.travellerDetails.adult * trip.infantFare)}</span>
      </h1>  
    </div>
    </div> 
    </div>                    
  })

  //display payment details
  const paymentData = tripSummaries.map((trip, index) => {
    return <div key={index} className='text-sm mt-4'>
    <div>
      <h1 className='font-bold'>Trip-{index+1}: [{index === 1 ? trip.returnOrigin : trip.origin} -&gt; {index === 1 ? trip.returnDestination : trip.destination}]</h1>
      <h1 className='font-semibold'>{trip.shipName}</h1>
      <h1>{trip.departTime} | {index === 1 ? trip.returnDate.slice(3) : trip.departDate.slice(3)}</h1>
    </div>

    <div className='flex justify-between flex-wrap gap-y-2 mt-1'>
      <div>
        <h1 className='font-semibold'>Passengers</h1>
        <h1>Adult -&gt; {travellerDetails.adult}</h1>
        <h1>Infant -&gt; {travellerDetails.infant}</h1>
      </div>
      <div>
        <h1 className='font-semibold'>Price</h1>
        <h1>₹{adultFare}</h1>
        <h1>₹{infantFare}</h1>
      </div>
      <div>
        <h1 className='font-semibold'>Convenience Fee</h1>
        <h1>₹0</h1>
        <h1>₹0</h1>
      </div>
      <div>
        <h1 className='font-semibold'>Sum</h1>
        <h1>₹{totalAdultFare}</h1>
        <h1>₹{totalInfantFare}</h1>
      </div>
    </div>   

  </div>
  })


  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Paid!')
  }

  return (
    <>
      <Navforwithout />
      <div className="h-full w-auto">
        <div className="font-Nunito_Sans">
          <div className="w-[90%] flex xl:flex-col justify-center mx-auto mt-12 mb-8">

            <div className="w-[50%] lg:w-full xl:w-[50%] px-8 py-8">
                <h1 className="text-[#699c78] text-[26px] md:text-2xl font-Ubuntu_Mono font-semibold ">
                  Review Booking
                </h1> 
                <h1 
                  className='cursor-pointer italic decoration-[1.5px] decoration-green-600 hover:underline hover:text-green-700'
                  onClick={() => scrollToPolicies(policiesRef)}
                >
                  (Please read our policies before booking)
                </h1>
              
                {/* Displaying infants and adults data */}
                {adultsData}
                {travellerDetails.infant !== 0 ? infantsData : ""}                
            </div>

            <form            
              className="w-[50%] xs:w-full lg:w-[60%] xl:w-[50%] bg-white overflow-hidden p-8 "
              onSubmit={handleSubmit}
            >
              <h1 className="text-[#699c78] text-[26px] md:text-2xl font-Ubuntu_Mono font-bold mb-6 md:mb-3 tracking-wide">
                Billing Details
              </h1>
              <div className="flex flex-col gap-1">
              <label htmlFor='contact-name' className='font-semibold'>Full Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="user_name"
                  value={contactDetails.name}
                  placeholder="Full Name"
                  className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
              <label htmlFor='contact-email' className='font-semibold'>Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="user_email"
                  value={contactDetails.email}
                  placeholder="Email"
                  className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
              <label htmlFor='contact-phone' className='font-semibold'>Mobile Number</label>
                <input
                  type="number"
                  id="contact-phone"
                  name="user_phone"
                  value={contactDetails.phone}
                  placeholder="Mobile Number"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div> 
              <div className="flex flex-col gap-1 mt-5 mb-10">
              <label htmlFor='contact-altphone' className='font-semibold'>Alternate Mobile Number</label>
                <input
                  type="number"
                  id="contact-altphone"
                  name="user_alt_phone"
                  value={contactDetails.altPhone}
                  placeholder="Alternate Mobile Number"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"                  
                />                
              </div>                 

              {/*Payment details */}              
              {paymentData}
              <div className='mt-6 flex'>
                <h1 className='text-lg font-semibold'>Grand Total</h1>
                <h1 className='text-lg font-semibold ml-auto'>₹{totalTripFare}</h1>                  
              </div>
              <hr className='border-t border-gray-300' />      
              
              <button
                type="submit"
                className="bg-[#408c57] shadow-2xl hover:bg-[#51795d]
                  text-white text-[21px] md:text-[16px] tracking-wider font-Ubuntu_Mono font-semibold rounded-full
                  p-2 w-full mt-8 mb-4"
              >                
                Pay Now (₹{totalTripFare})
              </button>
            </form>

            <div className="w-[50%] md:w-full lg:w-[45%] xl:w-[50%] p-8 ">

            <h1 className="text-[26px] text-[#699c78] md:text-2xl font-Ubuntu_Mono font-semibold">
              Trip Summary
            </h1>  
            {
              tripData.length === 0 ? 
              <h1>Please select seats to proceed with booking.</h1> 
              : 
              tripData
            }  
            </div>

          </div>
        </div>

        <div className='w-[90%] mx-auto font-Nunito_Sans'>
          <h1 ref={policiesRef} className='text-3xl font-semibold my-4'>Read Before you Book</h1>
          <div className='flex flex-wrap gap-5 mb-10'>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Confirmation</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>This is not a confirmed booking. This is an order to confirm the booking and SublimeIsland will confirm the booking on the best effort basis in the next 3-4 hours,
               maximum being 24 hours.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Cancellation</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>48 hours before the departure, INR 250/person/ticket. 
              24 – 48 hours before the departure 50% of the tickets. Within 24 hours, 100% of the ticket.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Reporting Time</h1>
              <hr className='border-t border-gray-300' />
              <p className='mt-2'>Please report at the operator’s check-in at Jetty 1 hour before the departure.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Rescheduling</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>Rescheduling will be treated as cancellation and rebooking, will be charged as per the cancellation policy.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Ferry Seat Category</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>The ferries will usually have 3 seat categories: Economy, Luxury and Royal. 
              While different operators use different terms but the facilities are similar for each category, there still exist some differences between operators.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Luggage Policy</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>25 KG/person, mostly not too strict. You’ll be able to carry more than what you can carry in a flight.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Reschedule/Cancellations by Operator</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>The operator reserves the right to change or cancel based on weather or technical issues. 
              In that case, you’ll be endorsed to a different ferry or given a full refund.
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Ferry Boarding Points</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>Port Blair: Haddo Jetty, Havelock: Havelock Jetty (only Jetty in Havelock Island), Neil Island: Neil Jetty (only Jetty in Neil Island).
              </p>
            </div>

            <div className='flex flex-col w-[30rem]'>
              <h1 className='text-lg font-semibold'>Infant Policy</h1>
              <hr className='border-t border-gray-300 w-[95%]' />
              <p className='mt-2'>A child above 12 months/1 years will be charged a full ticket amount.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewBooking