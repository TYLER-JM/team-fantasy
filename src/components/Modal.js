export default function Modal({children, modalRef}) {

  return (
    <dialog ref={modalRef} className="modal__dialog">
      {children}
    </dialog>
  )
}