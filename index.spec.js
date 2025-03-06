import { Backoff } from './index.js';
import { describe, it, expect } from 'vitest'

describe('.duration()', function () {
  it('should increase the backoff', function () {
    var b = new Backoff;

    expect(100).toBe(b.duration());
    expect(200).toBe(b.duration());
    expect(400).toBe(b.duration());
    expect(800).toBe(b.duration());

    b.reset();
    expect(100).toBe(b.duration());
    expect(200).toBe(b.duration());
  })
})