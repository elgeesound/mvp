import React from 'react';

const Test = () => <Button><Heart /><Fun />REACT</Button>
const Fun = () => <div>I love lamp.</div>
const Button = (props) => <button id="bangarang">{props.children}</button>
const Heart = () => <span>👿 WORK PLZ</span>

export default Test;