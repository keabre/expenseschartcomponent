
// code for the bars

// initial max height will be determined

// case for if 0 bars reach the max height, hence, the height of the bars are relative to a constant default set height, meaning that their value are the same as the pixels on the screen,
// else, revise this if pixels make look weird

// once one or more bars (or more: if two bars share the same height/value and they are also the largest heights/values out of all of the other bars)
// reach a value higher than the default height
//     then, set the max height to the value of the highest bar(s), then work out the height of the rest of the bars relative to the highest bar.
//     With those relative values of the bars, follow this formula:

//         height of bar = value to pixel (worked out from tallest bar [how many pixels per one unit of value]) * (percentage value of given bar in relation to highest bar x 100)



// PSEUDO CODE:

// - FETCHING JSON -
let bars = [];
fetch('http://127.0.0.1:5500/expenseschartcomponent/expenses-chart-component-main/expenses-chart-component-main/data.json')
    .then((response) => response.json())
    .then((json) => {
        
        
        for (let i = 0; i < 7; i++) {
          const item = json[i];
          bars.push(item.amount);
        }
        let monbar = document.getElementById('mon-bar').style.height = `${bars[0]*2.5}px`;


        let tuebar = document.querySelector('#tue-bar').style.height = `${bars[1]*2.5}px`;

        let wedbar = document.querySelector('#wed-bar').style.height = `${bars[2]*2.5}px`;

        let thubar = document.querySelector('#thu-bar').style.height = `${bars[3]*2.5}px`;

        let fribar = document.querySelector('#fri-bar').style.height = `${bars[4]*2.5}px`;

        let satbar = document.querySelector('#sat-bar').style.height = `${bars[5]*2.5}px`;

        let sunbar = document.querySelector('#sun-bar').style.height = `${bars[6]*2.5}px`;
        

        
        
      })
    
    .catch(error => console.error('Error fetching/parsing JSON:', error));
    

const barinfo = document.querySelector('#mon-bar-content').getBoundingClientRect();
console.log(bars);
console.log(barinfo);

const height = barinfo.height;
console.log(height);


let day_bar_val_list = [];

const monbarval = document.getElementById('mon-bar-value');
day_bar_val_list.push(monbarval);

const tuebarval = document.getElementById('tue-bar-value');
day_bar_val_list.push(tuebarval);

const wedbarval = document.getElementById('wed-bar-value');
day_bar_val_list.push(wedbarval);

const thubarval = document.getElementById('thu-bar-value');
day_bar_val_list.push(thubarval);

const fribarval = document.getElementById('fri-bar-value');
day_bar_val_list.push(fribarval);

const satbarval = document.getElementById('sat-bar-value');
day_bar_val_list.push(satbarval);

const sunbarval = document.getElementById('sun-bar-value');
day_bar_val_list.push(sunbarval);


let day_bar_list = [];

const mondaybar = document.getElementById('mon-bar');
day_bar_list.push(mondaybar);

const tuesdaybar = document.getElementById('tue-bar');
day_bar_list.push(tuesdaybar);

const wednesdaybar = document.getElementById('wed-bar');
day_bar_list.push(wednesdaybar);

const thursdaybar = document.getElementById('thu-bar');
day_bar_list.push(thursdaybar);

const fridaybar = document.getElementById('fri-bar');
day_bar_list.push(fridaybar);

const saturdaybar = document.getElementById('sat-bar');
day_bar_list.push(saturdaybar);

const sundaybar = document.getElementById('sun-bar');
day_bar_list.push(sundaybar);

console.log(day_bar_val_list);

// for (let value in day_bar_val_list) {
//     value.addEventListener("mouseover", (event) => {
//         event.target.style.cssText = 'background-color: hsl(25, 47%, 15%); width: 100%; height: 40px; margin-bottom: 5px; border-radius: 5px;';
//     });
// }


day_bar_list.forEach(element => { 
    element.addEventListener('mouseover', (event) => {


        for (let i = 0; i < day_bar_val_list.length; i++) {
            event.target.previousElementSibling.style.cssText = 'background-color: hsl(25, 47%, 15%); width: 100%; height: 40px; margin-bottom: 5px; border-radius: 5px;';
            event.target.style.backgroundColor = "lightblue";
        }

    });
});














