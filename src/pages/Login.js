import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

function Login () {
	const history = useHistory()
	const [form, setForm] = useState({
		username: '',
		password: ''
	})

	const onSubmit = (e) => {
		e.preventDefault()
		if (form.username === 'admin' && form.password === '861c1dbe-1de4-11ec-9621-0242ac130002') {
			localStorage.setItem('access', '861c1dbe-1de4-11ec-9621-0242ac130002')
			history.push('/main')
		}
	}

	return (
		<Row>
			<Form onSubmit={onSubmit}>
				<Col>
					<FormGroup>
						<Label>Username</Label>
						<Input type="text" onChange={(e) => {
							setForm((prevState) => ({...prevState, username: e.target.value}));
						}}/>
					</FormGroup>
				</Col>
				<Col>
					<FormGroup>
						<Label>Password</Label>
						<Input type="password" onChange={(e) => {
							setForm((prevState) => ({...prevState, password: e.target.value}));
						}}/>
					</FormGroup>
				</Col>
				<Button type={"submit"}>Submit</Button>
			</Form>
		</Row>
	)
}

export default Login;
