import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2>Who are we?</h2>
        </div>
        <p>
          <b>
          We’re making a difference together. 
          </b>
        </p>
        <p>
        Join our cause and see how your contribution can help.
        </p>
      </div>
      <div className="button-container">
        <Link href="/contacts" className="button">
          Contacts
        </Link>
        <Link href="/causes/pages.js" className="button">
          Causes
        </Link>
        <Link href="/gallery" className="button">
          Gallery
        </Link>
      </div>
    </>
  );
}
