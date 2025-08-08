import { Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import R1Props from './Component/R_1_Props';
import R2List from './Component/R_2_List';
import R3Boots from './Component/R_3_Boots';
import R4FontAwUse from './Component/R_4_FontAwUse';
import R5StateComDidMoun from './Component/R_5_StateComDidMoun';
import R6Clscom from './Component/R_6_Clscom';
import R7StateFull from './Component/R_7_StateFull';
import R9Ruf from './Component/R_9_Ruf';
import R10Eventhandling from './Component/R_10_Eventhandling';
import R11ifElseRendring from './Component/R_11_IfElseRendring';
import R12ModuleUse from './Component/R_12_ModuleUse';
import R13ShowPasswordHide from './Component/R_13_ShowPasswordHide';
import R14ResponsivMenu from './Component/R_14_ResponsivMenu';
import R15LoginModel from './Component/R_15_LoginModel';
import R6Faqu from './Component/R_16_Faqu';
import R17Crud from './Component/R_17_CRUD';
import R18PropsDrilling from './Component/R_18_PropsDrilling';
import R_19_ReactToastify from './Component/R_19_ReactNotifications';
import Home from './Page/Home';
import R20ToDoList from './Component/R_20_ToDoList';
import R21TabbingSystem from './Component/R_21_TabbingSystem';
import R22PasswordGenreter from './Component/R_22_PasswordGenreter';
import WeatherApp from './Component/R_23_WeatherApp ';
import R24useContext from "./Component/R_24_useContext";
import UserContext from "./Component/R_24_creContext";
import R25useRef from './Component/R_25_useRef';
import R26useReducer from './Component/R_26_useReducer';
import R27useMemo from './Component/R_27_useMemo';
import R27useMemoBoot from './Component/R_27_useMemoBoot';
import R28useCallback from './Component/R_28_useCallback';

function App() {
    // Ek object bana rahe hain jisko hum Prop me pass karenge  
    let objst = {
        name: "dk",
        age: 20,
        add: 8920,
    };
    return (
        <div className="App">
            <Header />
            <UserContext.Provider value="Dk">
                <Routes> {/* ✅ Use Routes here instead of Router */}
                    <Route path="/" element={<Home />} />
                    {/* Prop me Give to children only visible to Route Page */}
                    <Route path="/prop" element={<R1Props name="John" email="john@example.com" objst={objst}><h2>App .js</h2></R1Props>} />
                    <Route path="/list" element={<R2List />} />
                    <Route path="/boots" element={<R3Boots />} />
                    <Route path="/fontaw" element={<R4FontAwUse />} />
                    <Route path="/stm" element={<R5StateComDidMoun />} />
                    <Route path="/cm" element={<R6Clscom name="John" email="john@example.com" objst={objst} />} />
                    <Route path="/sf" element={<R7StateFull />} />
                    <Route path="/ruf" element={<R9Ruf />} />
                    <Route path="/eh" element={<R10Eventhandling />} />
                    <Route path="/el" element={<R11ifElseRendring />} />
                    <Route path="/module" element={<R12ModuleUse />} />
                    <Route path="/pass" element={<R13ShowPasswordHide />} />
                    <Route path="/resmenu" element={<R14ResponsivMenu />} />
                    <Route path="/logmo" element={<R15LoginModel />} />
                    <Route path="/faq" element={<R6Faqu />} />
                    <Route path="/crud" element={<R17Crud />} />
                    <Route path="/notify" element={<R_19_ReactToastify />} />
                    <Route path="/propdriling" element={<R18PropsDrilling />} />
                    <Route path="/todo" element={<R20ToDoList />} />
                    <Route path="/tab" element={<R21TabbingSystem />} />
                    <Route path="/passgen" element={<R22PasswordGenreter />} />
                    <Route path="/weather" element={<WeatherApp />} />
                    <Route path="/usecon" element={<R24useContext />} />

                    <Route path="/useref" element={<R25useRef />} />

                    <Route path="/usered" element={<R26useReducer />} />
                    <Route path="/usememo" element={<R27useMemo />} />


                    <Route path="/usememoboot" element={<R27useMemoBoot />} />
                    <Route path="/usecall" element={<R28useCallback />} />
                    {/* Add more routes here if needed */}
                </Routes>
            </UserContext.Provider>
        </div>
    );
}

export default App;
