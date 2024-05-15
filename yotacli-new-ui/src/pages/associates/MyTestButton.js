import React from 'react';
import {Link} from 'react-router-dom';

const MyTestButton = ()=>{
return(
    <Link to ={"/my-test"}>
         <button type="button" class="btn btn-primary">My Test</button> 
    </Link>
);
}

export default MyTestButton;
