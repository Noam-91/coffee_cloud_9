import {Avatar, Link, Typography} from "@material-ui/core";
import {Button, Checkbox, FormControlLabel, Paper, TextField} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import classes from "./Login.module.scss"
import {Field, FieldProps, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup';
import {RouteComponentProps} from "react-router-dom";
import {constants} from "../shared/appConstants";

function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.google.com/">
                Mercury
            </Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const Login = (props: LoginProps)=>{
    const paperRef = React.createRef<HTMLDivElement>()

    const initialValues = {username:'',password:'',rememberMe:false};
    const submitHandler = ()=>{
        paperRef.current?.classList.add(classes.submitted);
        // TODO
    }
    const userSchema = Yup.object().shape({
        username: Yup.string().email('Not a proper email')
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required'),
    });
    const renderField=({field, form: {errors}, ...props}:FieldProps)=>{
    return (
        field.name==="username"?
            <TextField
                className={classes.formControl}
                {...field}
                {...props}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                variant="outlined"
                autoComplete="email"
                autoFocus
            />
        :
            <TextField
                className={classes.formControl}
                {...field}
                {...props}
                error={!!errors[field.name]}
                helperText={errors[field.name]}
                autoComplete="current-password"
            />
    );
    }

    return (
        <Paper ref={paperRef} elevation={3} className={classes.Login}>
            <Avatar className={classes.avatar}>
                <AccountCircleIcon sx={{width:"40px",height:"40px"}}/>
            </Avatar>
            <h2>Sign in</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={submitHandler}
                validationSchema = {userSchema}
            >
                {({errors, isValid, })=> {
                    isValid ? paperRef.current?.classList.remove(classes.invalid) :
                        paperRef.current?.classList.add(classes.invalid)
                    return(
                        <Form className={classes.formGroup}>
                        <Field
                            name={'username'}
                            type={'text'}
                            label={'Username'}
                            key={'username'}
                            errors={errors}
                            component={renderField}/>
                        <Field
                            name={'password'}
                            type={'password'}
                            label={'Password'}
                            key={'password'}
                            errors={errors}
                            component={renderField}/>
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button type={'submit'} color={'primary'} className={classes.btnLogin}>Log in</Button>
                    </Form>
                    )}}
            </Formik>

            <div className={classes.signupRow}>
                <Link href="#" >
                    <u>Forgot password?</u>
                </Link>
                <Link href={constants.signupRoute}>
                    <u>Don't have an account? Sign Up</u>
                </Link>
            </div>
            <Copyright />

        </Paper>

    )
}

export default Login;
interface LoginProps extends RouteComponentProps{

}