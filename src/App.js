import { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import './App.css';

const Login = lazy(()=>import('./components/Login'))
const Dashboard = lazy(()=>import('./components/Dashboard'))
const AddUser = lazy(()=>import('./components/AddUser'))
const EditUser = lazy(()=>import('./components/EditUser'))

function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen w-screen bg-gray-50">
        <div id="ghost">
          <div id="red">
            <div id="pupil"></div>
            <div id="pupil1"></div>
            <div id="eye"></div>
            <div id="eye1"></div>
            <div id="top0"></div>
            <div id="top1"></div>
            <div id="top2"></div>
            <div id="top3"></div>
            <div id="top4"></div>
            <div id="st0"></div>
            <div id="st1"></div>
            <div id="st2"></div>
            <div id="st3"></div>
            <div id="st4"></div>
            <div id="st5"></div>
            <div id="an1"></div>
            <div id="an2"></div>
            <div id="an3"></div>
            <div id="an4"></div>
            <div id="an5"></div>
            <div id="an6"></div>
            <div id="an7"></div>
            <div id="an8"></div>
            <div id="an9"></div>
            <div id="an10"></div>
            <div id="an11"></div>
            <div id="an12"></div>
            <div id="an13"></div>
            <div id="an14"></div>
            <div id="an15"></div>
            <div id="an16"></div>
            <div id="an17"></div>
            <div id="an18"></div>
          </div>
          <div id="shadow"></div>
        </div>
      </div>
    }>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<authRoute><Dashboard /></authRoute>} />
      <Route path="/addUser" element={<authRoute><AddUser /></authRoute>} />
      <Route path="/edit-user/:id" element={<authRoute><EditUser /></authRoute>} />
    </Routes>
    </Suspense>
  );
}

export default App;
