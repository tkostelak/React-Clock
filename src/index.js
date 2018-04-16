function liveTime(){
  let greeting = React.createElement('h1', {}, 'Bonjour, Universe!');

  let clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString("en-GB")}`)

  let app = React.createElement('div', {}, greeting, clock);

  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
}

let rand = Math.floor(Math.random() * Math.floor(10000))

setInterval(liveTime, rand);
