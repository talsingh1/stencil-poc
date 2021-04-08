function addScript( src, type, add ) {
  var s = document.createElement( 'script' );
  s.setAttribute( 'src', src );
  s.setAttribute( 'type', type );
  if(add)
  s.setAttribute( add, true );
  document.querySelector('body').appendChild( s );
}


setTimeout(() => {

// addScript('./build/shop.esm.js', 'module', '');
// addScript('./build/shop.js', '', 'nomodule');


    const tooltip = document.createElement('component-one');
    tooltip.setAttribute('color', "red");

    // const tooltip2 = document.createElement('component-two');
    // tooltip2.setAttribute('color', "brown");

    const tooltip3 = document.createElement('component-one');
    tooltip3.setAttribute('color', "green");

    // const tooltip4 = document.createElement('component-two');
    // tooltip4.setAttribute('color', "orange");

    document.querySelector('#box1').appendChild(tooltip); 
    //document.querySelector('#box2').appendChild(tooltip2); 
    document.querySelector('#box3').appendChild(tooltip3); 
    // document.querySelector('#box4').appendChild(tooltip4); 

    const tooltip5 = document.createElement('my-element');
    tooltip4.setAttribute('name', "Talvinder");

}, 0);