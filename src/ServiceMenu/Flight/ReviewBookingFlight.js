import React, { useRef } from "react";
import flight from "../../Data/Flight-Section/flight";
import Navforwithout from "../../Navforwithout";
import { useDataContext } from "../../context/useDataContext";
import flightLogo from "../../images/flightlogo.png";
import { MdKeyboardArrowRight, MdAdd, MdAttachMoney } from "react-icons/md";
import flightFeature from "../../images/flightFeature.png";
import flightIcon from "../../images/flightIcon.png";
import flightLogoMini from "../../images/flightLogoMini.png";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import visa from "../../images/image_source_for_shiptab/visa.png";
import master from "../../images/image_source_for_shiptab/mastercard.png";
const ReviewBookingFlight = () => {
  //scroll to policies
  const policiesRef = useRef(null);
  const scrollToPolicies = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
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
    passengerClass,
    endingDate,
    adultDetails,
    childrenDetails,
    infantDetails,
    contactDetails,
    flightDataState,
  } = useDataContext();
  //   console.log("🚀 ~ file: ReviewBookingFlight.js:22 ~ ReviewBookingFlight ~ flightDataState:", flightDataState)
  // calculating fares
  const totalAdultFare = travellerInfo.adult * flightDataState.adultPrice;
  const totalInfantFare = travellerInfo.infant * flightDataState.infantPrice;
  const totalChildrenFare =
    travellerInfo.children * flightDataState.childrenPrice;
  const totalFare = totalAdultFare + totalInfantFare + totalChildrenFare;
  let totalTripFare = totalFare;
  const discount = 200;
  const taxes = totalFare * (3 / 100);
  const fee = 400;
  const netTotal = totalFare + discount + taxes + fee;
  let num = 1;

  // if (twoWay) num = 2;
  // if (num === 2) {
  //   totalTripFare = 2 * totalFare;
  // }

  const flightData = flight.find(
    (airplane) => airplane.currentDestination === currentDestinationFilter
  );

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
            value={adult.title}
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => childrenChangeHandler(event, index)}
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
            // onChange={(event) => childrenChangeHandler(event, index)}
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
            // onChange={(event) => childrenChangeHandler(event, index)}
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
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => adultChangeHandler(event, index)}
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
            // onChange={(event) => infantChangeHandler(event, index)}
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
            // onChange={(event) => infantChangeHandler(event, index)}
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
            // onChange={(event) => infantChangeHandler(event, index)}
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
            // onChange={(event) => infantChangeHandler(event, index)}
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
            // onChange={(event) => infantChangeHandler(event, index)}
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
  const navigate = useNavigate();
  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Paid!");
    navigate("/Flight");
  };

  const tripData = [...Array(num)].reverse().map((_, index) => (
    <div className="p-4 md:w-full lg:w-[29.29vw] bg-white" key={index}>
      {" "}
      <div className=" flex items-center gap-5 ">
        <img src={flightLogo} alt="flightLogo" className="w-24 h-24" />
        <div>
          <p className="font-[500] text-black/75">{passengerClass}</p>
          <p className="font-semibold text-lg">{flightDataState.flightName}</p>
        </div>
      </div>
      <hr className="my-5" />
      <p>
        Your booking is protected by <b>golobe</b>
      </p>
      <hr className="my-5" />
      <div className="flex flex-col gap-4">
        <h1 className="font-bold">Price Details</h1>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Base Fare</p>
          <p className="font-[600] text-md">₹ {totalFare}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Discount</p>
          <p className="font-[600] text-md">₹ {discount}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Taxes</p>
          <p className="font-[600] text-md">₹ {taxes}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-[500] text-md">Service Fee</p>
          <p className="font-[600] text-md">₹ {fee}</p>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex justify-between">
        <p className="font-[500] text-md">Total</p>
        <p className="font-[600] text-md">₹ {netTotal}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full bg-[#FF8682] rounded py-4 mt-3 text-white text-md"
      >
        Confirm and Pay
      </button>
    </div>
  ));
  const paymentData = [...Array(num)].reverse().map((_, index) => (
    <div key={index}>
      {" "}
      <div className="text-sm mt-4">
        <h1 className="font-bold">
          Trip-:{index + 1} [
          {index === 1 ? currentDestinationFilter : nextDestinationFilter} -&gt;{" "}
          {index === 1 ? nextDestinationFilter : currentDestinationFilter}]
        </h1>
        <h1 className="font-bold">
          {index === 1 ? currentDestinationFilter : nextDestinationFilter} -&gt;{" "}
          {index === 1 ? nextDestinationFilter : currentDestinationFilter}
        </h1>
        <h1 className="font-bold">
          {flightData.flightName}(
          <span className="italic font-normal">
            {flightData.travelRoute} Class
          </span>
          )
        </h1>
        <h1 className="font-bold">
          {flightData.departureTime} |{" "}
          {index === 1
            ? endingDate[0].endDate.toDateString()
            : startingDate[0].startDate.toDateString()}
        </h1>
      </div>
      <div className="flex justify-between flex-wrap gap-y-2 mt-1">
        <div>
          <h1>Passengers </h1>
          <h1>Adult -&gt; {travellerInfo.adult}</h1>
          <h1>Children -&gt; {travellerInfo.children}</h1>
          <h1>Infant -&gt; {travellerInfo.infant} </h1>
        </div>

        <div>
          <h1 className="font-semibold">Price</h1>
          <h1>₹{flightData.adultPrice}</h1>
          <h1>₹{flightData.childrenPrice}</h1>
          <h1>₹{flightData.infantPrice}</h1>
        </div>
        <div>
          <h1 className="font-semibold">Convenience Fee</h1>
          <h1>₹0</h1>
          <h1>₹0</h1>
          <h1>₹0</h1>
        </div>
        <div>
          <h1 className="font-semibold">Sum</h1>
          <h1>₹{totalAdultFare}</h1>
          <h1>₹{totalInfantFare}</h1>
          <h1>₹{totalChildrenFare}</h1>
        </div>
      </div>
      {/* </div> */}
    </div>
  ));

  return (
    <>
      <Navforwithout />
      <div className="h-full w-auto" style={{ fontFamily: "Montserrat" }}>
        <div className="w-[90%] mx-auto mt-12 mb-8">
          <div className="flex items-center gap-2 ">
            <span className="text-[#FF8682] ">Flight</span>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <span className="text-[#FF8682] ">
              {flightDataState.flightName}
            </span>
            <span>
              <MdKeyboardArrowRight />
            </span>
            <span>Payment</span>
          </div>
          <div className=" flex xl:flex-col  ">
            <div className="w-full">
              <div className="mt-12 w-full h-fit bg-[#FFFFFF] py-8 px-6 shadow-[0px_4px_16px_rgba(17,34,17,0.05)] rounded-xl">
                <div className="flex justify-between">
                  <h5 className="text-xl text-[#112211]">
                    Return {endingDate[0].endDate.toDateString()}
                  </h5>
                  <h5 className="text-xl text-[#112211]">
                    {flightDataState.flightDuration}
                  </h5>
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex items-center w-auto justify-center bg-[#FFFFFF] gap-5  border-[0.5px] border-[0.5px_solid_#8DD3BB] rounded-lg px-8 py-4 ">
                    <img
                      src={flightLogoMini}
                      alt="flightLogoMini"
                      className=""
                    />
                    <div className="">
                      <h2 className="font-semibold text-2xl">Emirates</h2>
                      <p className="text-[#112211] opacity-[0.6] font-[500]">
                        {flightDataState.flightName}
                      </p>
                    </div>
                  </div>
                  <div className="">
                    {" "}
                    <img src={flightFeature} alt="" />
                  </div>
                </div>
                <div
                  className="flex justify-between items-center w-full h-auto
           mx-auto mt-5"
                >
                  <div className="">
                    <div>
                      <span className="font-bold">
                        {flightDataState.departureTime}
                      </span>

                      <span className="ml-2">{currentDestinationFilter}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span>
                      {" "}
                      <img
                        src={flightIcon}
                        className="w-full h-8"
                        alt="flightIcon"
                      />{" "}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold">
                      {flightDataState.arrivalTime}
                    </span>
                    <span className="ml-2">{nextDestinationFilter}</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xl font-thin text-slate-400 italic my-4">
                  Payment Method
                </p>
                <div>
                  <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
                    <div className="flex">
                      <input type="radio" class="default:ring-2 ..." />
                      <img src={visa} alt="" className="mx-3" />
                      <p className="mr-10">.....6754</p>
                      <p>Expires 06/2021</p>
                    </div>
                    <p>Remove</p>
                  </div>
                  <div className="flex justify-between border border-[#17183B] opacity-20 rounded-sm p-4">
                    <div className="flex">
                      <input type="radio" class="default:ring-2 ..." />
                      <img src={master} alt="" className="mx-3" />
                      <p className="mr-10">.....5643</p>
                      <p>Expires 11/2025</p>
                    </div>
                    <p>Remove</p>
                  </div>
                  <div className="flex items-center my-8">
                    <MdAdd className="mr-6 text-cyan-500 text-xl" />
                    <p>Add Payment method</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[50%] md:w-full lg:w-[35%] xl:w-[30%] md:pl-0 pl-8">
              {/* <h1 className="text-[26px] text-[#699c78] md:text-2xl  font-semibold">
                Trip Summary
              </h1> */}
              {tripData.length === 0 ? (
                <h1>Please select seats to proceed with booking.</h1>
              ) : (
                tripData
              )}
            </div>
          </div>
        </div>
        {/* <div className="w-[90%] mx-auto font-Nunito_Sans">
          <h1 ref={policiesRef} className="text-3xl font-semibold my-4">
            Read Before you Book
          </h1>
          <div className="flex flex-wrap gap-5 mb-10">
            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Confirmation</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                This is not a confirmed booking. This is an order to confirm the
                booking and SublimeIsland will confirm the booking on the best
                effort basis in the next 3-4 hours, maximum being 24 hours.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Cancellation</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                48 hours before the departure, INR 250/person/ticket. 24 – 48
                hours before the departure 50% of the tickets. Within 24 hours,
                100% of the ticket.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Reporting Time</h1>
              <hr className="border-t border-gray-300" />
              <p className="mt-2">
                Please report at the operator’s check-in at Jetty 1 hour before
                the departure.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Rescheduling</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                Rescheduling will be treated as cancellation and rebooking, will
                be charged as per the cancellation policy.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Ferry Seat Category</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                The ferries will usually have 3 seat categories: Economy, Luxury
                and Royal. While different operators use different terms but the
                facilities are similar for each category, there still exist some
                differences between operators.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Luggage Policy</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                25 KG/person, mostly not too strict. You’ll be able to carry
                more than what you can carry in a flight.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">
                Reschedule/Cancellations by Operator
              </h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                The operator reserves the right to change or cancel based on
                weather or technical issues. In that case, you’ll be endorsed to
                a different ferry or given a full refund.
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Ferry Boarding Points</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                Port Blair: Haddo Jetty, Havelock: Havelock Jetty (only Jetty in
                Havelock Island), Neil Island: Neil Jetty (only Jetty in Neil
                Island).
              </p>
            </div>

            <div className="flex flex-col w-[30rem]">
              <h1 className="text-lg font-semibold">Infant Policy</h1>
              <hr className="border-t border-gray-300 w-[95%]" />
              <p className="mt-2">
                A child above 12 months/1 years will be charged a full ticket
                amount.
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
};

export default ReviewBookingFlight;
