"use client";

import { useState } from "react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CalculatorsSection() {
  const [propertyValue, setPropertyValue] = useState(5000000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const loanAmount = propertyValue * (1 - downPayment / 100);
  const monthlyRate = interestRate / 12 / 100;
  const months = tenure * 12;
  const emi =
    monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1)
      : loanAmount / months;

  const [investment, setInvestment] = useState(1000000);
  const [appreciation, setAppreciation] = useState(12);
  const [years, setYears] = useState(5);
  const futureValue = investment * Math.pow(1 + appreciation / 100, years);

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Financial Tools"
          title="Plan Your Investment"
          subtitle="Use our calculators to estimate EMI payments and investment returns."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="luxury-card p-6 sm:p-8 dark:bg-navy-light">
              <h3 className="font-heading text-xl font-semibold text-navy dark:text-white mb-6">
                Mortgage EMI Calculator
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Property Value (₹)</label>
                  <input type="range" min={1000000} max={50000000} step={100000} value={propertyValue} onChange={(e) => setPropertyValue(+e.target.value)} className="w-full mt-2 accent-primary" />
                  <p className="text-right font-medium text-primary">₹{propertyValue.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Down Payment ({downPayment}%)</label>
                  <input type="range" min={10} max={50} value={downPayment} onChange={(e) => setDownPayment(+e.target.value)} className="w-full mt-2 accent-primary" />
                </div>
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Interest Rate ({interestRate}%)</label>
                  <input type="range" min={6} max={15} step={0.1} value={interestRate} onChange={(e) => setInterestRate(+e.target.value)} className="w-full mt-2 accent-primary" />
                </div>
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Tenure ({tenure} years)</label>
                  <input type="range" min={5} max={30} value={tenure} onChange={(e) => setTenure(+e.target.value)} className="w-full mt-2 accent-primary" />
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-primary/10 p-6 text-center">
                <p className="text-sm text-navy/60 dark:text-white/60">Monthly EMI</p>
                <p className="font-heading text-3xl font-bold text-primary mt-1">
                  ₹{Math.round(emi).toLocaleString("en-IN")}
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="luxury-card p-6 sm:p-8 dark:bg-navy-light">
              <h3 className="font-heading text-xl font-semibold text-navy dark:text-white mb-6">
                Investment Calculator
              </h3>
              <div className="space-y-5">
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Investment Amount (₹)</label>
                  <input type="range" min={500000} max={10000000} step={100000} value={investment} onChange={(e) => setInvestment(+e.target.value)} className="w-full mt-2 accent-primary" />
                  <p className="text-right font-medium text-primary">₹{investment.toLocaleString("en-IN")}</p>
                </div>
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Expected Appreciation ({appreciation}% p.a.)</label>
                  <input type="range" min={5} max={20} step={0.5} value={appreciation} onChange={(e) => setAppreciation(+e.target.value)} className="w-full mt-2 accent-primary" />
                </div>
                <div>
                  <label className="text-sm text-navy/60 dark:text-white/60">Investment Period ({years} years)</label>
                  <input type="range" min={1} max={15} value={years} onChange={(e) => setYears(+e.target.value)} className="w-full mt-2 accent-primary" />
                </div>
              </div>
              <div className="mt-6 rounded-xl bg-primary/10 p-6 text-center">
                <p className="text-sm text-navy/60 dark:text-white/60">Estimated Future Value</p>
                <p className="font-heading text-3xl font-bold text-primary mt-1">
                  ₹{Math.round(futureValue).toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-green-600 mt-2">
                  +₹{Math.round(futureValue - investment).toLocaleString("en-IN")} returns
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
