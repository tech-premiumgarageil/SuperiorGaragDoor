import Link from "next/link";
import { Footer } from "@/components/footer";
import { Icon } from "@/components/icons";
export default function NotFound() {
  return (
    <>
      <main id="main-content">
        <section className="not-found section">
          <div className="container">
            <h1>
              Let’s get you
              <br />
              to the right door.
            </h1>
            <p>
              We couldn’t find that page. Explore our services or return to the
              homepage.
            </p>
            <Link className="button button-primary" href="/services">
              Explore services <Icon />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
