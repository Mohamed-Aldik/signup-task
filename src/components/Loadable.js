import { Suspense } from 'react';

import Loader from './Loader';


const Loadable = (Component) => (props) =>
   {
    const Page = Component
    return  (
        <Suspense fallback={<Loader />}>
            <Page/>
        </Suspense>
    )

   };

export default Loadable;
