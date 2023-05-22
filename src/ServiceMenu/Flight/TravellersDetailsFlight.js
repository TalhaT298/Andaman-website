import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flight from "../../Data/Flight-Section/flight";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
// import { useLocation, useNavigate } from 'react-router-dom';

const TravellersDetailsFlight = () => {
  const navigate = useNavigate()
  // const location = useLocation();
  // const { state } = location
  // const {
  //   travellerInfo,
  //   currentDestinationFilter,
  //   startingDate,
  //   nextDestinationFilter,
  //   twoWay,
  //   endingDate,
  //   adultDetails,
  //   setAdultDetails,
  //   childrenDetails,
  //   setChildrenDetails,
  //   infantDetails,
  //   setInfantDetails,
  //   contactDetails,
  //   setContactDetails,
  //   setFlightDataState,
  //   flightDataState
  // } = state

  const {
    travellerInfo,
    currentDestinationFilter,
    startingDate,
    nextDestinationFilter,
    twoWay,
    endingDate,
    adultDetails,
    setAdultDetails,
    childrenDetails,
    setChildrenDetails,
    infantDetails,
    setInfantDetails,
    contactDetails,
    setContactDetails,
    // setFlightDataState,
    flightDataState
  } = useDataContext();

  let num = 1;
  if (twoWay) num = 2;

  // const flightData = flight.find(
  //   (airplane) => airplane.currentDestination === currentDestinationFilter
  // );
  // setFlightDataState(flightData)
  //calculating fares
  // const totalAdultFare = travellerInfo.adult * 1400;
  // const totalInfantFare = travellerInfo.adult * 200;
  // const totalFare = totalAdultFare + totalInfantFare;

  //adult details
  // const [adultDetails, setAdultDetails] = useState([]);
  useEffect(() => {
    const tempAdultDetails = [];
    for (let i = 0; i < travellerInfo.adult; i++) {
      let object = {
        title: "",
        name: "",
        gender: "",
        age: "",
        nationality: "IN",
      };
      tempAdultDetails.push(object);
    }
    setAdultDetails(tempAdultDetails);
  }, [travellerInfo, setAdultDetails]);

  const adultChangeHandler = (event, index) => {
    let data = [...adultDetails];
    data[index][event.target.name] = event.target.value;
    setAdultDetails(data);
  };
  //children details
  // const [childrenDetails, setChildrenDetails] = useState([]);
  useEffect(() => {
    const tempChildrenDetails = [];
    for (let i = 0; i < travellerInfo.children; i++) {
      let object = {
        title: "",
        name: "",
        gender: "",
        age: "",
        nationality: "IN",
      };
      tempChildrenDetails.push(object);
    }
    setChildrenDetails(tempChildrenDetails);
  }, [travellerInfo, setChildrenDetails]);

  const childrenChangeHandler = (event, index) => {
    let data = [...childrenDetails];
    data[index][event.target.name] = event.target.value;
    setChildrenDetails(data);
  };

  //infant details
  // const [infantDetails, setInfantDetails] = useState([]);
  useEffect(() => {
    const tempInfantDetails = [];
    for (let i = 0; i < travellerInfo.infant; i++) {
      let object = {
        title: "",
        name: "",
        gender: "",
        age: "",
        nationality: "IN",
      };
      tempInfantDetails.push(object);
    }
    setInfantDetails(tempInfantDetails);
  }, [travellerInfo, setInfantDetails]);

  const infantChangeHandler = (event, index) => {
    let data = [...infantDetails];
    data[index][event.target.name] = event.target.value;
    setInfantDetails(data);
  };

  //display adults
  const adultsData = adultDetails.map((adult, index) => (
    <div key={index}>
      <h1 className="font-bold mt-5 mb-3">Adult {index + 1}</h1>

      <div className="flex flex-col gap-3 text-sm">
        <div>
          <label htmlFor="title">Title</label>
          <select
            id="title"
            name="title"
            value={adultDetails.title}
            onChange={(event) => adultChangeHandler(event, index)}
            className="p-1 border border-gray-300 ml-[55px]"
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
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={adult.name}
            onChange={(event) => adultChangeHandler(event, index)}
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[16px]"
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={adult.age}
            onChange={(event) => adultChangeHandler(event, index)}
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[55px]"
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={adult.gender}
            onChange={(event) => adultChangeHandler(event, index)}
            className="p-1 border border-gray-300 ml-[35px]"
            required
          >
            <option value="">Select</option>
            <option value="Male" selected>
              Male
            </option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="country">Nationality</label>
          <select
            id="country"
            name="nationality"
            value={adult.nationality}
            onChange={(event) => adultChangeHandler(event, index)}
            required
            className="p-1 border border-gray-300 w-32 ml-3"
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
            <option value="IN" selected>
              India
            </option>
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
            <option value="MK">
              Macedonia, the Former Yugoslav Republic of
            </option>
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
            <option value="MS">[Montserrat]</option>
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
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
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
  ));
  //display Children
  const childrenData = childrenDetails.map((children, index) => (
    <div key={index}>
      <h1 className="font-bold mt-5 mb-3">Children {index + 1}</h1>

      <div className="flex flex-col gap-3 text-sm">
        <div>
          <label htmlFor="title">Title</label>
          <select
            id="title"
            name="title"
            value={children.title}
            onChange={(event) => childrenChangeHandler(event, index)}
            className="p-1 border border-gray-300 ml-[55px]"
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
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={children.name}
            onChange={(event) => childrenChangeHandler(event, index)}
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[16px]"
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={children.age}
            onChange={(event) => childrenChangeHandler(event, index)}
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[55px]"
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={children.gender}
            onChange={(event) => adultChangeHandler(event, index)}
            className="p-1 border border-gray-300 ml-[35px]"
            required
          >
            <option value="">Select</option>
            <option value="Male" selected>
              Male
            </option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="country">Nationality</label>
          <select
            id="country"
            name="nationality"
            value={children.nationality}
            onChange={(event) => adultChangeHandler(event, index)}
            required
            className="p-1 border border-gray-300 w-32 ml-3"
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
            <option value="IN" selected>
              India
            </option>
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
            <option value="MK">
              Macedonia, the Former Yugoslav Republic of
            </option>
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
            <option value="MS">[Montserrat]</option>
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
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
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
  ));
  //display infants
  const infantsData = infantDetails.map((infant, index) => (
    <div key={index}>
      <h1 className="font-bold mt-5 mb-3">Infant {index + 1}</h1>

      <div className="flex flex-col gap-3 text-sm">
        <div>
          <label htmlFor="title">Title</label>
          <select
            id="title"
            name="title"
            value={infant.title}
            onChange={(event) => infantChangeHandler(event, index)}
            className="p-1 border border-gray-300 ml-[55px]"
            required
          >
            <option value="">Select</option>
            <option value="Master">Master</option>
            <option value="Miss">Miss</option>
          </select>
        </div>

        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={infant.name}
            onChange={(event) => infantChangeHandler(event, index)}
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[16px]"
            required
          />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={infant.age}
            onChange={(event) => infantChangeHandler(event, index)}
            className="h-[38px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400 ml-[55px]"
            required
          />
        </div>

        <div>
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={infant.gender}
            onChange={(event) => infantChangeHandler(event, index)}
            className="p-1 border border-gray-300 ml-[35px]"
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="country">Nationality</label>
          <select
            id="country"
            name="nationality"
            value={infant.nationality}
            onChange={(event) => infantChangeHandler(event, index)}
            required
            className="p-1 border border-gray-300 w-32 ml-3"
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
            <option value="IN" selected>
              India
            </option>
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
            <option value="MK">
              Macedonia, the Former Yugoslav Republic of
            </option>
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
            <option value="MS">[Montserrat]</option>
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
            <option value="GS">
              South Georgia and the South Sandwich Islands
            </option>
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
  ));

  //contact details
  // const [contactDetails, setContactDetails] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   altPhone: "",
  // });
  const handleContactChange = (e) => {
    let object = { ...contactDetails };
    object[e.target.name] = e.target.value;
    setContactDetails(object);
  };


  const tripData = [...Array(num)].reverse().map((_, index) => (
    <div key={index}>
      {" "}
      <div className="flex gap-3 mt-4 mb-2 text-[15px]">
        <h1 className="border-b border-black font-bold">Trip-:{index + 1}</h1>
        <h1 className="font-bold">
          {index === 1 ? currentDestinationFilter : nextDestinationFilter} -&gt;{" "}
          {index === 1 ? nextDestinationFilter : currentDestinationFilter}
        </h1>
      </div>
      <div className="flex flex-col gap-1 text-sm ml-1">
        <div className="flex gap-2">
          <h1>Date: </h1>
          <h1 className="font-bold">
            {index === 1
              ? endingDate[0].endDate.toDateString()
              : startingDate[0].startDate.toDateString()}
          </h1>
        </div>

        <div className="flex gap-2">
          <h1>Time: </h1>
          <h1 className="font-bold">
            {index === 1 ? flightDataState.departureTime : flightDataState.arrivalTime} to{" "}
            {index === 1 ? flightDataState.arrivalTime : flightDataState.departureTime}
          </h1>
        </div>

        <div className="flex gap-2">
          <h1>Ferry: </h1>
          <h1 className="font-bold">
            {flightDataState.flightName}(
            <span className="italic font-normal">
              {flightDataState.travelRoute} Class
            </span>
            )
          </h1>
        </div>

        <div className="flex flex-wrap gap-x-2">
          <h1>Total Fare: </h1>
          <h1 className="font-bold">
            {travellerInfo.adult} x Adult(₹ {flightDataState.adultPrice})
            {travellerInfo.infant !== 0 ? (
              <span>
                {" "}
                + {travellerInfo.infant} x Infant(₹ {flightDataState.infantPrice})
              </span>
            ) : (
              ""
            )}
            {travellerInfo.children !== 0 ? (
              <span>
                {" "}
                + {travellerInfo.children} x children(₹{" "}
                {flightDataState.childrenPrice})
              </span>
            ) : (
              ""
            )}
            <span>
              {" "}
              = ₹{" "}
              {travellerInfo.adult * flightDataState.adultPrice +
                travellerInfo.children * flightDataState.childrenPrice}
            </span>
          </h1>
        </div>
      </div>
    </div>
  ));
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // check empty fields
    let checkEmptyField = false;

    for (let i = 0; i < adultDetails.length; i++) {
      const values = Object.values(adultDetails[i]);
      for (let j = 0; j < values.length; j++) {
        if (values[j] === null || values[j] === "") {
          checkEmptyField = true;
        }
      }
    }
    for (let i = 0; i < infantDetails.length; i++) {
      const values = Object.values(infantDetails[i]);
      for (let j = 0; j < values.length; j++) {
        if (values[j] === null || values[j] === "") {
          checkEmptyField = true;
        }
      }
    }

    if (!checkEmptyField) {
      navigate("/FlightReviewBooking");
    } else {
      alert("Please fill all the details!");
    }
  };

  return (
    <>
      <Navforwithout />
      <div className="h-full w-auto">
        <div className="font-Nunito_Sans">
          <div className="w-[90%] flex xl:flex-col justify-center mx-auto mt-12 mb-8">
            <div className="w-[50%] lg:w-full xl:w-[50%] px-8 py-8">
              <h1 className="text-[#699c78] text-[26px] md:text-2xl font-[Montserrat] font-semibold ">
                Add Traveller(s) Details
              </h1>

              {/* Displaying infants and adults data */}
              {adultsData}
              {childrenData}
              {infantsData}
            </div>

            <form
              className="w-[50%] xs:w-full lg:w-[60%] xl:w-[50%] bg-white overflow-hidden 
                    p-8 "
              onSubmit={handleSubmit}
            >
              <h1 className="text-[#699c78] text-[26px] md:text-2xl font-[Montserrat] font-bold mb-6 md:mb-3 tracking-wide">
                Add Contact Details
              </h1>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactDetails.name}
                  onChange={handleContactChange}
                  placeholder="Full Name"
                  className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactDetails.email}
                  onChange={handleContactChange}
                  placeholder="Email"
                  className="h-[40px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={contactDetails.phone}
                  onChange={handleContactChange}
                  placeholder="Mobile Number"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                  required
                />
              </div>
              <div className="flex flex-col gap-1 mt-5">
                <input
                  type="number"
                  id="alt_phone"
                  name="altPhone"
                  value={contactDetails.altPhone}
                  onChange={handleContactChange}
                  placeholder="Alternate Mobile Number"
                  className="h-[45px] outline-none p-4 rounded-md border border-gray-300 focus:border-2 focus:border-slate-400"
                />
                <div className="ml-1 mt-5">
                  <input type="checkbox" id="check" required className="mr-2" />
                  <label htmlFor="check">
                    Agree with
                    <span className="text-[#549b69]">
                      {" "}
                      terms and conditions
                    </span>{" "}
                    and the
                    <span className="text-[#549b69]">
                      {" "}
                      cancellation policy.
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#408c57] shadow-2xl hover:bg-[#51795d]
                  text-white text-[21px] md:text-[16px] tracking-wider font-[Montserrat] font-semibold rounded-full
                  p-2 w-full mt-8"
              >
                {/* {status} */}
                Proceed
              </button>
            </form>

            <div className="w-[50%] md:w-full lg:w-[45%] xl:w-[50%] p-8 ">
              <h1 className="text-[26px] text-[#699c78] md:text-2xl font-[Montserrat] font-semibold">
                Trip Summary
              </h1>
              {tripData.length === 0 ? (
                <h1>Please select seats to proceed with booking.</h1>
              ) : (
                tripData
              )}
              {/* <div className="flex gap-3 mt-4 mb-2 text-[15px]">
                <h1 className="border-b border-black font-bold">Trip-:1</h1>
                <h1 className="font-bold">
                  {currentDestinationFilter} -&gt; {nextDestinationFilter}
                </h1>
              </div>

              <div className="flex flex-col gap-1 text-sm ml-1">
                <div className="flex gap-2">
                  <h1>Date: </h1>
                  <h1 className="font-bold">
                    {startingDate[0].startDate.toDateString()}
                  </h1>
                </div>

                <div className="flex gap-2">
                  <h1>Time: </h1>
                  <h1 className="font-bold">
                    {flightDataState.departureTime} to {flightDataState.arrivalTime}
                  </h1>
                </div>

                <div className="flex gap-2">
                  <h1>Ferry: </h1>
                  <h1 className="font-bold">
                    {flightDataState.flightName}(
                    <span className="italic font-normal">
                      {flightDataState.travelRoute} Class
                    </span>
                    )
                  </h1>
                </div>

                <div className="flex flex-wrap gap-x-2">
                  <h1>Total Fare: </h1>
                  <h1 className="font-bold">
                    {travellerInfo.adult} x Adult(₹ {flightDataState.adultPrice})
                    {travellerInfo.infant !== 0 ? (
                      <span>
                        {" "}
                        + {travellerInfo.infant} x Infant(₹{" "}
                        {flightDataState.infantPrice})
                      </span>
                    ) : (
                      ""
                    )}
                    {travellerInfo.children !== 0 ? (
                      <span>
                        {" "}
                        + {travellerInfo.children} x children(₹{" "}
                        {flightDataState.childrenPrice})
                      </span>
                    ) : (
                      ""
                    )}
                    <span>
                      {" "}
                      = ₹{" "}
                      {travellerInfo.adult * flightDataState.adultPrice +
                        travellerInfo.children * flightDataState.childrenPrice}
                    </span>
                  </h1>
                </div>
              </div> */}

              {/* <div className="flex gap-3 mt-4 mb-2 text-[15px]">
                <h1 className="border-b border-black font-bold">
                  Trip-{index + 1}:
                </h1>
                <h1 className="font-bold">
                  {index === 1 ? trip.returnOrigin : trip.origin} -&gt;{" "}
                  {index === 1 ? trip.returnDestination : trip.destination}
                </h1>
              </div> */}

              {/* <div className="flex flex-col gap-1 text-sm ml-1">
                <div className="flex gap-2">
                  <h1>Date: </h1>
                  <h1 className="font-bold">
                    {index === 1
                      ? trip.returnDate.slice(3)
                      : trip.departDate.slice(3)}
                  </h1>
                </div>

                <div className="flex gap-2">
                  <h1>Time: </h1>
                  <h1 className="font-bold">
                    {trip.departTime} to {trip.arrivalTime}
                  </h1>
                </div>

                <div className="flex gap-2">
                  <h1>Ferry: </h1>
                  <h1 className="font-bold">
                    {trip.shipName}(
                    <span className="italic font-normal">
                      {trip.shipClass} Class
                    </span>
                    )
                  </h1>
                </div>

                <div className="flex flex-wrap gap-x-2">
                  <h1>Total Fare: </h1>
                  <h1 className="font-bold">
                    {trip.travellerDetails.adult} x Adult(₹ {trip.adultFare})
                    {trip.travellerDetails.infant !== 0 ? (
                      <span>
                        {" "}
                        + {trip.travellerDetails.infant} x Infant(₹{" "}
                        {trip.infantFare})
                      </span>
                    ) : (
                      ""
                    )}
                    <span>
                      {" "}
                      = ₹{" "}
                      {trip.travellerDetails.adult * trip.adultFare +
                        trip.travellerDetails.adult * trip.infantFare}
                    </span>
                  </h1>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TravellersDetailsFlight;
