import type { ReactNode } from "react";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Mobile Auto Detailers | Neat Touch Auto Spa",
  description:
    "Contact Neat Touch Auto Spa for mobile auto detailing in Schaumburg, Elgin, Naperville, Arlington Heights, Wheaton and the Chicago suburbs. Call, email or request a quote online.",
  path: "/contact",
  keywords: [
    "contact mobile auto detailing Chicago suburbs",
    "mobile detailing quote Schaumburg",
    "book car detailing near me",
  ],
});

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Contact Neat Touch Auto Spa",
              description:
                "Contact Neat Touch Auto Spa for mobile auto detailing appointments and quotes in the Chicago suburbs.",
              path: "/contact",
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Contact", url: "/contact" },
            ])
          ),
        }}
      />
      {children}
    </>
  );
}
