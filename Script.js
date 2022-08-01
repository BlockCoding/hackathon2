// Selecting all required elements
const wrapper = document.querySelector('.wrapper'),
  toast = wrapper.querySelector('.toast'),
  title = toast.querySelector('span'),
  subTitle = toast.querySelector('p'),
  wifiIcon = toast.querySelector('.icon'),
  closeIcon = toast.querySelector('.close-icon')

window.onload = () => {
  function ajax () {
    let xhr = new XMLHttpRequest() //creating new XML object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true) //sending get request on this URL
    xhr.onload = () => {
      //once ajax loaded
      //if ajax status is equal to 200 or less than 300 that mean user is getting data from that provided url
      //or his/her response status is 200 that means he/she is online
      if (xhr.status == 200 && xhr.status < 300) {
        toast.classList.remove('offline')
        title.innerText = "You're online now"
        subTitle.innerText = 'Hurray! Internet is connected.'
        wifiIcon.innerHTML = '<i class="uil uil-wifi"></i>'
        closeIcon.onclick = () => {
          //hide toast notification on close icon click
          wrapper.classList.add('hide')
        }
        setTimeout(() => {
          //hide the toast notification automatically after 5 seconds
          wrapper.classList.add('hide')
        }, 5000)
      } else {
        offline() //calling offline function if ajax status is not equal to 200 or not less that 300
      }
    }
    xhr.onerror = () => {
      offline() ////calling offline function if the passed url is not correct or returning 404 or other error
    }
    xhr.send() //sending get request to the passed url
  }

  function offline () {
    //function for offline
    wrapper.classList.remove('hide')
    toast.classList.add('offline')
    title.innerText = "You're offline now"
    subTitle.innerText = 'Opps! Internet is disconnected.'
    wifiIcon.innerHTML = '<i class="uil uil-wifi-slash"></i>'
  }

  setInterval(() => {
    //this setInterval function call ajax frequently after 100ms
    ajax()
  }, 100)
}

function started () {
  alert('NICE')
}

function functionAlert (msg, myYes) {
  var confirmBox = $('#confirm')
  confirmBox.find('message').text(msg)
  confirmBox
    .find('.yes')
    .unbind()
    .click(function () {
      confirmBox.hide()
    })
  confirmBox.find('.yes').click(myYes)
  confirmBox.show()
}

var mybutton = document.getElementById('myBtn')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block'
  } else {
    mybutton.style.display = 'none'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

// When the user clicks on the button, scroll to the top of the document
function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

var acc = document.getElementsByClassName('accordion')
var i

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active')
    var panel = this.nextElementSibling
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  })
}

// the vaildation seection
const checkMTNparamters = [
  '0803',
  '0703',
  '0903',
  '2340806',
  '0706',
  '0810',
  '0816'
]
const checkGloparameters = ['0805', '0705', '0815', '234905']
const check9moblieParameters = ['0809', '0818', '0817', '2340909']
const checkAitelParameters = ['0802', '0902', '0701', '2340808']

const sendMail = () => {
  const NetworkNumberEl = document.getElementById(`display_result`)
  const phoneNumber = document.getElementById('phone_number').value
  if (phoneNumber.length !== 11 && phoneNumber.length !== 13) {
    alert(`Invalid phone number`)
    return
  }

  const phoneNumberParams =
    phoneNumber.length === 11
      ? phoneNumber.slice(0, 4)
      : phoneNumber.slice(0, 6)

  if (checkMTNparamters.includes(phoneNumberParams)) {
    NetworkNumberEl.innerHTML = `<div>
 <img style="width:20vw;height:20vh;" class="network_image" src="https://adeptadvisory.co.za/wp-content/uploads/2019/12/mtn_logo-1.jpg" alt="MTN Network">
 </div>`
  } else if (checkGloparameters.includes(phoneNumberParams)) {
    NetworkNumberEl.innerHTML = `<div>
  <img class="network_image" style="width:20vw;height:20vh;" src="https://olorisupergal.com/wp-content/uploads/2018/09/Glo-logo1.png" alt="Glo network">
  </div>`
  } else if (check9moblieParameters.includes(phoneNumberParams)) {
    NetworkNumberEl.innerHTML = `<div>
  <img class="network_image style="width:20vw;height:20vh;" src="https://th.bing.com/th/id/R.8c85eba6cc09e117a49a9ffad9837578?rik=Z%2bGcF%2fjABaEwPQ&pid=ImgRaw&r=0" alt="9mobile Network">
  </div>`
  } else if (checkAitelParameters.includes(phoneNumberParams)) {
    NetworkNumberEl.innerHTML = `<div>
  <img class="network_image" style="width:20vw;height:20vh;" src="https://th.bing.com/th/id/R.7ef1457acf52b43f6abd9d9a5fb04bfb?rik=n9mJ58pjrYm9jw&pid=ImgRaw&r=0" alt="Airtel Network">
  </div>`
  } else {
    NetworkNumberEl.innerHTML = 'Invaild Network'
  }
}

function myFunction () {
  var x = document.getElementById('myLinks')
  if (x.style.display === 'block') {
    x.style.display = 'none'
  } else {
    x.style.display = 'block'
  }
}

function dark () {
  var element = document.body
  element.classList.toggle('dark-mode')
}
