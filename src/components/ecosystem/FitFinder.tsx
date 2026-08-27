"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
  type FitAnswers,
  deviceById,
  emptyFit,
  recommendDevices,
} from "@/data/ecosystem";

const field =
  "w-full rounded-full border-0 bg-surface px-5 py-3.5 text-sm font-medium outline-none";

export function FitFinder() {
  const [a, setA] = useState<FitAnswers>(emptyFit);
  const ready = Boolean(a.pet && a.size && a.scene);
  const result = useMemo(
    () => (ready ? recommendDevices(a) : null),
    [a, ready],
  );
  const primary = result ? deviceById(result.primary) : null;

  return (
    <section id="compare" className="container-site scroll-mt-28 py-16 md:py-24">
      <Reveal>
        <p className="section-label">Find the right fit</p>
        <h2 className="mt-3 max-w-2xl text-[1.75rem] font-semibold leading-tight md:text-[2.5rem]">
          Which layer does your pet need first?
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Static front-end logic only — answers stay in the browser. At-home
          and companionship picks point to Petble AI, not a fourth device.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <form
          className="space-y-4 rounded-[1.75rem] bg-surface p-6 md:p-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="block text-sm font-semibold">
            Pet
            <select
              className={`${field} mt-2`}
              value={a.pet}
              onChange={(e) =>
                setA({ ...a, pet: e.target.value as FitAnswers["pet"] })
              }
            >
              <option value="">Select</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
            </select>
          </label>
          <label className="block text-sm font-semibold">
            Size
            <select
              className={`${field} mt-2`}
              value={a.size}
              onChange={(e) =>
                setA({ ...a, size: e.target.value as FitAnswers["size"] })
              }
            >
              <option value="">Select</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </label>
          <label className="block text-sm font-semibold">
            Main scene
            <select
              className={`${field} mt-2`}
              value={a.scene}
              onChange={(e) =>
                setA({ ...a, scene: e.target.value as FitAnswers["scene"] })
              }
            >
              <option value="">Select</option>
              <option value="outdoor">Outdoor safety</option>
              <option value="home">At-home observation</option>
              <option value="sleep">Sleep / rest health</option>
              <option value="companion">When you’re away</option>
              <option value="daily">Lightweight daily</option>
            </select>
          </label>
          <label className="block text-sm font-semibold">
            Need live location?
            <select
              className={`${field} mt-2`}
              value={a.location}
              onChange={(e) =>
                setA({
                  ...a,
                  location: e.target.value as FitAnswers["location"],
                })
              }
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label className="block text-sm font-semibold">
            Need health trends?
            <select
              className={`${field} mt-2`}
              value={a.health}
              onChange={(e) =>
                setA({ ...a, health: e.target.value as FitAnswers["health"] })
              }
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
          <label className="block text-sm font-semibold">
            Need remote interaction?
            <select
              className={`${field} mt-2`}
              value={a.remote}
              onChange={(e) =>
                setA({ ...a, remote: e.target.value as FitAnswers["remote"] })
              }
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </label>
        </form>

        <div className="rounded-[1.75rem] bg-white p-6 shadow-[0_8px_30px_rgba(18,22,35,0.06)] md:p-8">
          {!primary ? (
            <p className="text-muted">
              Choose pet, size, and a main scene to see a starting
              recommendation.
            </p>
          ) : (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted">
                Recommended first
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{primary.name}</h3>
              <p className="mt-2 text-sm text-muted">{primary.scene}</p>
              <p className="mt-4 text-sm leading-relaxed">{result?.reason}</p>
              <p className="mt-6 text-xs font-bold uppercase tracking-wide text-ink/50">
                Also consider
              </p>
              <ul className="mt-2 space-y-1 text-sm font-semibold">
                {result?.alts.map((id) => (
                  <li key={id}>{deviceById(id).name}</li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href={`#product-${primary.id}`}>See this device</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
