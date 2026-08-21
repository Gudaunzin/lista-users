import './User.css';

function User(props) {
  return (
    <div className="cartao">
      <div className="cabecalho">
        <img src={props.user.image} />

        <h2>
          {props.user.firstName} {props.user.lastName}
        </h2>

        <p>
          {props.user.age} anos | {props.user.gender}
        </p>
      </div>

      <div className="informacoes">
        <p>
          <strong>Email:</strong>
          <span>{props.user.email}</span>
        </p>

        <p>
          <strong>Telefone:</strong>
          <span>{props.user.phone}</span>
        </p>

        <p>
          <strong>Empresa:</strong>
          <span>{props.user.company.name}</span>
        </p>

        <p>
          <strong>Cargo:</strong>
          <span>{props.user.company.title}</span>
        </p>

        <p>
          <strong>Cidade:</strong>
          <span>
            {props.user.address.city} - {props.user.address.stateCode}
          </span>
        </p>
      </div>
    </div>
  );
}

export default User;
