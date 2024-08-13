import React from 'react';

const Form = () => {
  return (
    <form>
        <fieldset>
            <legend>Chose your animal</legend>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required placeholder="Your username"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" required placeholder="Password" minLength={8}/>

            <label htmlFor="cat">Cat</label>
            <input type="radio" id="cat" name="animals" value="cat"/>

            <label htmlFor="cat">Dog</label>
            <input type="radio" id="cat" name="animals" value="cat"/>

            <label htmlFor="horse">Horse</label>
            <input type="radio" id="horse" name="animals" value="horse"/>
            
            <button type="submit">Submit</button>
        </fieldset>      
    </form>
  );
};

export default Form;