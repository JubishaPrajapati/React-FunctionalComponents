import React from 'react';
//State
import Counter from './StateHooks/simpleHook';
import StringState from './StateHooks/stringState';
import ObjState from './StateHooks/objectState';
import ArrayState from './StateHooks/arrayState';
//useEffect
import SimpleEffect from './EfectHooks/simpleEffect';
import EmptyDependencies from './EfectHooks/emptyDependencies';
import WithDependencies from './EfectHooks/withDependencies';
import Fetching from './EfectHooks/fetching';
import MultipleEffects from './EfectHooks/multipleEffect';
//context hooks
import ToggleBtn from './ContextHooks/toggleBtn';
import { ToggleProvider } from './ContextHooks/toggleContext';
import ToggleDisplay from './ContextHooks/toggleDisplay';
import Parent from './ContextHooks/parent';

//ref
import SimpleRef from './UseRef/simpleRef';
import DifferenceRefandState from './UseRef/differenceuseRefAndState';
import RenderingRef from './UseRef/renderingInRef';
import HtmlRef from './UseRef/htmlRef';
import CombineuseRefEffect from './UseRef/combineuseRefEffect';
import TrackPrev from './UseRef/trackPrevState';
import MultipleRef from './UseRef/multipleRef';

//usereducer hooks
import UseReducerHook from './UseReducer/basicReducer';
import ComplexReducerHook from './UseReducer/complexReducer';

//callback hooks
import BasicCallbackHook from './UseCallback/basicCallbackHook';
import ParentCallback from './UseCallback/parentCallback';

//usememo hook
import BasicMemo from './UseMemo/basicUsage';
import Factorial from './UseMemo/factorial';

//custom hooks
import SimpleCustomComp from './CustomHooks/simpleCustomComp';
import SideEffectsCustomComp from './CustomHooks/sideEffectCustomComp';
import FetchCustomComp from './CustomHooks/fetchCustomComp';
import LoginAuthCustomComp from './CustomHooks/loginAuthCustom';

//HOC
import EnhanceComp from './HOC/SimpleHOC/baseComp';
import EnhanceAuth from './HOC/AuthenticationEg/baseAuth';
import EnhanceCompTheme from './HOC/ThemeChange/baseTheme';

import './App.css';



const App: React.FC = () => {
  return (
    <div>

      {/* <Parent />

      <Counter />
      <StringState />
      <ObjState />
      <ArrayState />
      <SimpleEffect />
      <EmptyDependencies />
      <WithDependencies />
      <MultipleEffects /> 
      <Fetching/>*/}


      {/* 
      <ToggleProvider>
        <div>
          <ToggleBtn />
          <ToggleDisplay />
        </div>
      </ToggleProvider>


      <SimpleRef />
      <DifferenceRefandState />
      <RenderingRef />
      <HtmlRef />
      <CombineuseRefEffect />
      <TrackPrev />
      <MultipleRef /> */}
      {/* <UseReducerHook />
      < ComplexReducerHook />
      <BasicCallbackHook />
      <ParentCallback />
      <BasicMemo />
      <Factorial /> */}

      {/* <SimpleCustomComp />
      <SideEffectsCustomComp />
      <FetchCustomComp />
      <LoginAuthCustomComp /> */}

      {/* passing props to enhancecomp */}
      <EnhanceComp name="Jubisha" />
      <EnhanceAuth />
      <EnhanceCompTheme />


    </div>

  )
}


export default App;
