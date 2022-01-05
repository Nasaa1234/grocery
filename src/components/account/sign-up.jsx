import React, {useState} from 'react'
import { BottomBar } from '..'
import '../../index/account.css'
import { Link, useLocation } from "react-router-dom";
import * as yup from 'yup'
import * as _ from 'lodash'

const SignUp = () => {
    const [set, setSet] = useState(false)
    yup.setLocale({
      mixed: {
        default: 'Não é válido',
      },
      string: {
        required: 'buglu',
        min: 'min',
        max: 'max',
      },
    })
  
    const [form, setForm] = useState({
      userId: '',
      password: '',
      name: '',
      address: '',
      country: '',
      zipCode: '',
      email: '',
      about: '',
    })
    const [errors, setErrors] = useState({
      userId: '',
      password: '',
      name: '',
      address: '',
      country: '',
      zipCode: '',
      email: '',
      about: ''
    });
  
  
    let schema = yup.object().shape({
      userId: yup.string().required().min(5).max(12),
      password: yup.string().required().min(7).max(12),
      name: yup.string().matches(/^[aA-zZ\s]+$/).required(),
      address: yup.string().required(),
      country: yup.string().required(),
      zipCode: yup.number().required().integer().positive(),
      email: yup.string().email().required(),
      about: yup.string().required()
    });
  
    const submit = () => {
      setSet(true)
      console.log(form)
      schema.validate(form, { abortEarly: false }).then(res => {
        console.log(res)
        setErrors()
      })
        .catch(e => {
          setErrors({
            userId: e.errors.filter(el => el.includes('userId')).join('\n'),
            password: e.errors.filter(el => el.includes('password')).join('\n'),
            Name: e.errors.filter(el => el.includes('Name')).join('\n'),
            address: e.errors.filter(el => el.includes('address')).join('\n'),
            country: e.errors.filter(el => el.includes('country')).join('\n'),
            zipCode: e.errors.filter(el => el.includes('zipCode')).join('\n'),
            email: e.errors.filter(el => el.includes('email')).join('\n'),
            about: e.errors.filter(el => el.includes('about')).join('\n'),
          })
          // setErrors({ ...errors, userId: e.errors[0] })
        })
    }
    const handleCheck = (e) => {
      setForm({ ...form, [e.target.id]: e.target.value })
      schema.validate(form, { abortEarly: false }).then(res => {
        console.log(res)
        setErrors()
      })
        .catch(e => {
          setErrors({
            userId: e.errors.filter(el => el.includes('userId')).join('\n'),
            password: e.errors.filter(el => el.includes('password')).join('\n'),
            Name: e.errors.filter(el => el.includes('Name')).join('\n'),
            address: e.errors.filter(el => el.includes('address')).join('\n'),
            country: e.errors.filter(el => el.includes('country')).join('\n'),
            zipCode: e.errors.filter(el => el.includes('zipCode')).join('\n'),
            email: e.errors.filter(el => el.includes('email')).join('\n'),
            about: e.errors.filter(el => el.includes('about')).join('\n'),
          })
        })
    }
    // function App() {
    //     const [wait, setWait] = useState(false)
    //     setInterval(() => {
    //         setWait(true)
    //     }, 3000)
    // }
    return (
        <div className='body'>
            <div className='green'>
            </div>
            <div className='welcome1'>
                Welcome to
                <div style={{ color: 'yellowgreen' }}>
                    Groceriet
                </div>

            </div>
            <div className='green1'>
            </div>
            <div className='green2'>
            </div> <div className='green3'>
            </div>

            <div className='SignUP'>
                <div className='login-login'>Sign Up</div>
                <div className='name-input'>
                    <input type="text" placeholder='Username' onChange={handleCheck} id='name' value={form.name}  />
                </div>
                <div className='password-input'>
                    <input type="Email" placeholder='Email' onChange={handleCheck} id='email' value={form.email}/>
                </div>
                <div className='password-input'>
                    <input type="password" placeholder='Password' onChange={handleCheck} id='password' value={form.password}/>
                </div>
                <div className='password-input'>
                    <input type="password" placeholder='Repeat Password' />
                </div>
                <div className='Login-button'>
                    <button onClick={submit}>
                        <Link to='/Account'>
                            Sign Up
                        </Link>
                    </button>
                </div>
                <i class="fas fa-eye"></i>
                <div className='Login' >
                    <Link to='/account' >
                        Log In
                    </Link>  </div>
            </div>


            <BottomBar />
        </div >
    )
}

export { SignUp }
