import { JSDOM } from 'jsdom'
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

const dom = new JSDOM('<!DOCTYPE html><html<head></head><body></body></html>')

global.window = dom.window
global.document = dom.window.document

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
})

chai.use(chaiImmutable);
