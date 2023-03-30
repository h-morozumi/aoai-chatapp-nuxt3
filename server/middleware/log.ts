export default defineEventHandler((event) => {

  const nowStr = getCurrentDateTime();
  console.log(`${nowStr} New request:[ ${event.node.req.url} ] `);
});

function getCurrentDateTime(): string {
  const now: Date = new Date();
  const year: number = now.getFullYear();
  const month: string = (now.getMonth() + 1).toString().padStart(2, '0');
  const day: string = now.getDate().toString().padStart(2, '0');
  const hour: string = now.getHours().toString().padStart(2, '0');
  const minute: string = now.getMinutes().toString().padStart(2, '0');
  const second: string = now.getSeconds().toString().padStart(2, '0');
  const formattedDateTime: string = `${year}/${month}/${day} ${hour}:${minute}:${second}`;
  return formattedDateTime;
}