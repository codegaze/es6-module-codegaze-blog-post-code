let shareButtons = function(){

  // Select all our buttons with the js-share-button class
  let shareButtons = document.querySelectorAll('.js-share-button');

  let init = () => {
    add_listeners_to_buttons();
  };
  
  //  No need for a parenthesis here we got one parameter
  let window_open = url => {
    window.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=500,height=300');
  }

  let add_listeners_to_buttons = () => {

    for (let button of shareButtons) {
      /* 
        We cannot use an arrow function because `this` will return `undefined`.
        So, we are using the button variable to have the preferred functionality.
      */
      button.addEventListener('click', e => {
        e.preventDefault();
        
        let service = button.getAttribute('data-service'),
            title = encodeURIComponent(button.title),
            page_url = encodeURIComponent(button.href),
            url = '';

        switch (service) {
          case 'facebook':
            url = `https://www.facebook.com/sharer/sharer.php?u=${page_url}`;
            break;
          case 'twitter':
            url = `https://twitter.com/intent/tweet/?text=${title}&url=${page_url}`;
            break;
          default:
            console.log(`There is no ${service} share service in your 'switch'!`);
            break;
        }
        
        window_open(url);
      });
    }
  };

  // Return to the user only the init function
  return{init:init}
}();

export default shareButtons;