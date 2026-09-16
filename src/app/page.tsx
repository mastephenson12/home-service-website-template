import { businessConfig } from "../config/business";
import { siteConfig } from "../config/site";

export default function HomePage() {
  return (
    <main>
      <section>
        <p>{businessConfig.trade}</p>

        <h1>
          {businessConfig.tagline}
        </h1>

        <p>
          Helpful information, trusted services, and practical resources for
          homeowners looking for {businessConfig.trade.toLowerCase()} help.
        </p>

        <div>
          <a href={businessConfig.callsToAction.primary.href}>
            {businessConfig.callsToAction.primary.label}
          </a>

          <a href={siteConfig.callsToAction.secondary.href}>
            {siteConfig.callsToAction.secondary.label}
          </a>
        </div>
      </section>

      <section>
        <h2>Services</h2>

        <ul>
          {businessConfig.services.map((service) => (
            <li key={service.slug}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Serving Homeowners Across {businessConfig.location.state}</h2>

        <p>
          Current example service area includes{" "}
          {businessConfig.location.serviceArea.join(", ")}.
        </p>
      </section>
    </main>
  );
}
