function Login() {
    return (
      <div>
        <div>
          <p>Login</p>
        </div>
        <form>
          <div>
            <label>Nome</label>
            <input type="text" />
          </div>
          <div>
            <label>Sobrenome</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          <div>
            <label>Senha</label>
            <input type="password" />
          </div>
        </form>
      </div>
    );
  }
  
  export default Login;
  