const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  page.on('console', msg => { if(msg.type() === 'error') errors.push(msg.text()); });

  await page.goto('http://localhost:8804/index.html');
  await page.waitForTimeout(500);

  const [id1, id2] = await page.evaluate(() => {
    const id1 = newEventId();
    const id2 = newEventId();
    events.push({ id: id1, place: 'A', kind: '女王更新', date: '2026-07-30', boxes: 3, partner: '', notes: '' });
    events.push({ id: id2, place: 'B', kind: '女王更新', date: '2026-08-01', boxes: 2, partner: '', notes: '' });
    render();
    return [id1, id2];
  });
  await page.waitForTimeout(200);

  const beforeCount = await page.evaluate(() => document.querySelectorAll('#summary [data-quf]').length);
  console.log('queen-update cards shown before completing any (should be 2):', beforeCount);

  await page.click(`#summary [data-quf="${id1}"]`);
  await page.waitForTimeout(200);

  const afterCount = await page.evaluate(() => document.querySelectorAll('#summary [data-quf]').length);
  const remainingIds = await page.evaluate(() => Array.from(document.querySelectorAll('#summary [data-quf]')).map(b => b.dataset.quf));
  const flag1 = await page.evaluate((id) => events.find(e => e.id === id).queenUpdateDone, id1);
  console.log('queen-update cards shown after completing id1 (should be 1):', afterCount);
  console.log('remaining card ids (should only be id2):', JSON.stringify(remainingIds), 'id2=', id2);
  console.log('id1.queenUpdateDone flag persisted on the event:', flag1);

  // undo via toast
  await page.click('.toastUndo');
  await page.waitForTimeout(200);
  const afterUndoCount = await page.evaluate(() => document.querySelectorAll('#summary [data-quf]').length);
  const flag1AfterUndo = await page.evaluate((id) => events.find(e => e.id === id).queenUpdateDone, id1);
  console.log('queen-update cards shown after undo (should be back to 2):', afterUndoCount);
  console.log('id1.queenUpdateDone flag after undo (should be false):', flag1AfterUndo);

  console.log('page errors:', JSON.stringify(errors));
  await browser.close();
})();
