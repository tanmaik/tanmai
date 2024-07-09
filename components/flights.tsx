"use client";

import { useActions, useUIState } from "ai/rsc";
import { ReactNode } from "react";

interface FlightsProps {
  flights: { id: string; flightNumber: string }[];
}

export const Flights = ({ results }: FlightsProps) => {
  const { submitUserMessage } = useActions();
  const [_, setMessages] = useUIState();

  return (
    <div>
      {results.map((result) => (
        <div key={result.id}>
          <div
            onClick={async () => {
              const { display } = await submitUserMessage(
                `lookupFlight ${result.flightNumber}`
              );

              setMessages((messages: ReactNode[]) => [...messages, display]);
            }}
          >
            {result.flightNumber}
          </div>
        </div>
      ))}
    </div>
  );
};
