import $ from 'jquery'
import { post } from 'axios'
import Notify from 'handy-notification'
import P from 'bluebird'



// FUNCTION FOR SHORTENING
const shortener = (elem, length) => {
  let
    parse = parseInt(length),
    len = elem.length
  if (!parse) { return; }
  return (len >= parse) ? `${elem.substr(0, length-2)}..` : (len < parse) ? elem : null
}

// FUNCTION TO TOGGLE
const toggle = el => {
  let style = el.style.display
  style === "none" ? el.style.display = "block" : el.style.display = "none"
}

// FUNCTION FOR COMMON LOGIN
const commonLogin = options => {
  let
    { data, btn, url, redirect, defBtnValue } = options,
    overlay2 = $('.overlay-2')

  btn
    .attr('value', 'Please wait..')
    .addClass('a_disabled')
  overlay2.show()

  post(url, data)
    .then(s => {
      let { data: { mssg, success } } = s
      if (success) {
        Notify({
          value: mssg,
          done: () => location.href = redirect
        })
        btn.attr('value', 'Redirecting..')
        overlay2.show()
      } else {
        Notify({ value: mssg })
        btn
          .attr('value', defBtnValue)
          .removeClass('a_disabled')
        overlay2.hide()
      }
      btn.blur()
    })
    .catch(e => console.log(e))

}


// FUNCTION TO CHECK WHETHER ITS ME OR NOT
const Me = user =>
  user == $('#data').data('session') ? true : false

// FUNCTION TO CHECK WHETHER EMAIL IS ACTIVATED ON NOT
const e_v = () => {
  let ea = $('.data').data('email-verified')
  return ea == "yes" ? true : false
}

// FUNCTION FOR EDTITNG PROFILE
const edit_profile = options => {
  P.coroutine(function *(){

    let
      { susername, semail, username, email, bio } = options,
      button = $('.e_done'),
      { data: uCount} = yield post('/api/what-exists', { what: "username", value: username }),
      { data: eCount } = yield post('/api/what-exists', { what: "email", value: email })

    button.
      addClass('a_disabled')
      .text('Processing..')
      .blur()

    if(!username){
        Notify({ value: "Username must not be empty!!" })
    } else if(!email){
        Notify({ value: "Email must not be empty!!" })
    } else if(uCount == 1 && username != susername){
        Notify({ value: "Username already exists!!" })
    } else if(eCount == 1 && email != semail){
        Notify({ value: "Email already exists!!" })
    } else {

      let { data: { mssg, success } } = yield post('/api/edit-profile', { username, email, bio })

      Notify({
        value: mssg,
        done: () => success ? location.reload() : null
      })

    }

    button
      .removeClass('a_disabled')
      .text('Done Editing')
      .blur()

  })().catch(e => console.log(e.stack) )

}

// FUNCTION FOR CHANGING AVATAR
const change_avatar = options => {
  let
    { file } = options,
    form = new FormData()

	$('.overlay-2').show()
    $('.avatar_span')
      .text('Changing avatar..')
      .addClass('sec_btn_disabled')

    form.append('avatar', file)

    $.ajax({
      url: "/api/change-avatar",
      method: "POST",
      processData: false,
      contentType: false,
      data: form,
      dataType: "JSON",
      success: data => {
        Notify({
          value: data.mssg,
          done: () => location.reload()
        })
      }
    })

}

// FUNCTION FOR RE-SENDING EMAIL VERIFICATION LINK
const resend_vl = () => {
  let
    vl = $('.resend_vl'),
    o = $('.overlay-2')

  vl
    .addClass('a_disabled')
    .text('Sending verification link..')

  o.show()

  post('/api/resend_vl')
    .then(s => {
      let { mssg } = s.data
      Notify({ value: mssg })
      vl
        .removeClass('a_disabled')
        .text('Send verification link')
        .blur()
      o.hide()
    })

}

// FUNCTION TO DEACTIVATE ACCOUNT
const deactivate = () => {
  let
    btn = $('.prompt-done'),
    o = $('.overlay')

  btn
    .addClass('a_disabled')
    .text('Deactivating..')

  o.show()

  post('/api/deactivate')
    .then(d => {
      btn
        .removeClass('a_disabled')
        .text('Deactivated')
      Notify({
        value: "Deactivated",
        done: () => location.href = "/login"
      })
    })
}

module.exports = {
  shortener,
  toggle,
  commonLogin,
  Me,
  e_v,
  last_line_remover,
  forProfile,
  back,
  edit_profile,
  change_avatar,
  resend_vl,
  deactivate,
}
