import React from 'react';
import './Contacus.css';
import '../../index.css';

function Modalcontacus (){
    return (
<div>
      <input type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal" />
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Información</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              
            </div>
      <div className="modal-body">
      <p>Su información ha sido enviada exitosamente <i class="fas fa-check"></i></p>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="button1" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="button2">Guardar</button>
      </div>
    </div>
  </div>
</div>
</div>



 );
}

export default Modalcontacus;

        