export function parseFlexibleDurationToSeconds(input: string): number {
  const units: Record<string, number> = {
    s: 1,
    m: 60,
    h: 3600,
    d: 86400,
    w: 604800,
    mo: 2592000,
    a: 31536000,
    y: 31536000,
  };

  const regex = /^(\d+)\s*(s|m|h|d|w|mo|a|año|y)$/i;
  const match = regex.exec(input.trim().toLowerCase());

  if (!match) {
    throw new Error(`Invalid TTL format: ${input}`);
  }

  const value = parseInt(match[1]);
  const unit = match[2];

  const multiplier = units[unit];
  if (!multiplier) {
    throw new Error(`Unknown TTL unit: ${unit}`);
  }

  return value * multiplier;
}
