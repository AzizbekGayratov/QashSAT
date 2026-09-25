function Modal({ open, title, children, onClose }) {
  if (!open) return null;

  return (
    <div className="ui-modal-backdrop" role="presentation" onClick={onClose}>
      <section className="ui-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
        <div className="ui-modal-header">
          <h2 id="modal-title">{title}</h2>
          <button type="button" className="ui-modal-close" onClick={onClose} aria-label="Close dialog">&times;</button>
        </div>
        {children}
      </section>
    </div>
  );
}

export default Modal;
