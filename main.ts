// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes one monologue (~100 words) to /output/entry.txt.
// Node 22, stdlib-only, no network, no file reads. Deterministic:
// every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

// The Innkeeper Who Counts Knives — 99 words, 530 characters.
// A villain who is secretly just very tired: the weariness lives in
// the routine, the pauses and the small deflections, never in a word
// that says so outright.
const MONOLOGUE =
  "Room's two coppers, supper's one, and the knives stay on the wall — house rules, same as when my father kept this inn. " +
  "I've heard every plot whispered over my stew: poison in the duke's cup, a blade for the taxman, a rope for the sheriff. " +
  "I serve the stew, I wash the bowls, I forget the words. " +
  "Twenty years at this counter. The faces change; the knives don't. " +
  "Forgetting's the only trade that never got anyone hanged. " +
  "So eat, sleep, pay at dawn. And if you plan murder, lad — do it quietly. " +
  "The floorboards gossip enough already.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
