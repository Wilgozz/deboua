import { useState, useContext } from 'react';
import './index.css';
import { Button, Grid, Input, Image, Container, GridRow, Form, FormField } from 'semantic-ui-react'

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginWarning, setLoginWarning] = useState();
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div>
      <Container fluid>
        <Grid>
          <Grid.Row>

            <Grid.Column computer={4} only='computer'>
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>


            <Grid.Column tablet={16} computer={8}>
              <div className='card'>
                <h3>Login</h3>
                <p className='subtituloLogin'>Bem-vindo novamente! Preencha os campos abaixo  para acessar sua conta</p>
                <Form>

                  <Form.Field required>
                    <Input placeholder='Digite seu e-mail' />
                  </Form.Field>

                  <Form.Field required>
                    <Input placeholder='Senha' />
                  </Form.Field>

                  <p className='naoConseguiuAcessarSuaConta'>Não conseguiu acessar sua conta?</p>
                  <Button color='mediumblue' type='submit'>Entrar</Button>
                </Form>

                <p className='aindaNaoPossuiUmaConta'>Ainda não possui uma conta? Clique aqui</p>
              </div>
            </Grid.Column>


            <Grid.Column computer={4} only='computer'  >
              <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container >
    </div>
  );
}

export default Login;