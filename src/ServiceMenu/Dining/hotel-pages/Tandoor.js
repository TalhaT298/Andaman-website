import { lazy } from 'react';
const Navforwithout = lazy(() => import('../../../Navforwithout'));

export default function Tandoor() {
  return (
    <div className="bg-gradient-to-br from-white text-slate-800 font-mono h-full m-0 p-0">
      <Navforwithout />
      <h2>hi</h2>
    </div>
  );
}


// import { Suspense } from 'react';