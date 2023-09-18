import './Modal.css'

type Props ={
    message: string;
}

export default function Modal({message}: Props){
    return (
        <div className="modal">
        <div className="modal-contents">
          <p>{message}</p>
          <button>Play Again</button>
        </div>
      </div>
    );
}