"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { Phone, Mail, MessageCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone required"),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message is required"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const formId = useId();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 1000));
    reset();
    alert("Thank you for your inquiry. Our team will contact you shortly.");
  };

  return (
    <section className="section-padding bg-surface dark:bg-navy-dark">
      <div className="container-custom">
        <SectionHeading
          label="Contact Us"
          title="Let's Build Something Extraordinary"
          subtitle="Reach out to our team for project inquiries, investments, or partnerships."
        />

        <div className="grid gap-12 lg:grid-cols-5">
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
                { icon: Phone, label: "Alternate Phone", value: siteConfig.phoneAlt, href: `tel:${siteConfig.phoneAlt.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                { icon: MessageCircle, label: "WhatsApp", value: siteConfig.whatsapp, href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}` },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-button text-xs font-semibold uppercase tracking-wider text-navy/50 dark:text-white/50">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="break-words text-navy dark:text-white hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-navy dark:text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </FadeIn>

          <FadeIn direction="right" className="lg:col-span-3">
            <form
              id={formId}
              onSubmit={handleSubmit(onSubmit)}
              className="luxury-card p-8 dark:bg-navy-light"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-medium text-navy dark:text-white">Full Name</label>
                  <input
                    id={`${formId}-name`}
                    {...register("name")}
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Your name"
                    suppressHydrationWarning
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor={`${formId}-email`} className="mb-1.5 block text-sm font-medium text-navy dark:text-white">Email</label>
                  <input
                    id={`${formId}-email`}
                    {...register("email")}
                    type="email"
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="your@email.com"
                    suppressHydrationWarning
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor={`${formId}-phone`} className="mb-1.5 block text-sm font-medium text-navy dark:text-white">Phone</label>
                  <input
                    id={`${formId}-phone`}
                    {...register("phone")}
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="+91"
                    suppressHydrationWarning
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                </div>
                <div>
                  <label htmlFor={`${formId}-subject`} className="mb-1.5 block text-sm font-medium text-navy dark:text-white">Subject</label>
                  <input
                    id={`${formId}-subject`}
                    {...register("subject")}
                    className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy px-4 py-3 text-sm outline-none focus:border-primary"
                    placeholder="Project inquiry"
                    suppressHydrationWarning
                  />
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-medium text-navy dark:text-white">Message</label>
                <textarea
                  id={`${formId}-message`}
                  {...register("message")}
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-navy px-4 py-3 text-sm outline-none focus:border-primary resize-none"
                  placeholder="Tell us about your requirements..."
                  suppressHydrationWarning
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>
              <div className="mt-6">
                <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </Button>
              </div>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
