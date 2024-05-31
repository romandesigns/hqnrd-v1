import { TechnicalSupportNavigation } from "@/app/ui/components/dashboard/Main/technical-support/Navigation";
import { Menu } from "@/app/ui/components/dashboard/Main/technical-support/tickets/Menu";
import { HiOutlineUser } from "@/app/ui/icons";
import { Locale } from "@/i18n-config";
import { Avatar, Button, Card, Image } from 'antd';
import Link from 'next/link';

export default function Page({
  params: { lang },
  searchParams:{ticketId},
}: Readonly<{
  params: { lang: Locale };
  searchParams: {ticketId: string};
}>) {

  return (
    <>
      <TechnicalSupportNavigation lang={lang} pageTitle="Tickets" />
      <section className="flex h-full w-full items-stretch justify-stretch p-4">
        <article className="h-full w-full bg-white p-4">
          <Menu lang={lang} />
          <div className="grid grid-cols-4 grid-flow-row items-center justify-center">

            <Card className="[&_.ant-card-extra]:w-full" extra={
              <div className="p-3 px-1 flex gap-2 items-center justify-center">
              <Button>Begin</Button>
              <Button>Done</Button>
              <Button>Cancel</Button>
              <Button className="ml-auto" type="default">History</Button>
            </div>
          } style={{ width: 500 }}>
              <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-4">
                <div>
                 <Avatar shape="square" size={120} icon={<HiOutlineUser />}/>
                </div>
                <div className="flex flex-col items-start justify-center gap-4">
                  <div>
                    <h2 className="text-lg font-bold">Create new sign up form</h2>
                    <p><b>Created by:</b> Alipio Feliz <b> on</b> 05/24/2024</p>
                  </div>

                  <div className="flex items-center justify-start flex-1 w-full">
                    <div className="w-full">
                      <p><b>Assignee:</b> Roman Feliz</p>
                      <div className="flex items-start justify-end gap-4">
                        <p><b>Priority:</b> High</p>
                        <p><b>Status:</b> Backlog</p>

                        <div className="ml-auto">
                          {
                            ticketId !== "2" ? <Link href={`/${lang}/portal/soporte-technico/tickets?ticketId=2`}>View Details</Link> :
                            ticketId === "2" && <Link href={`/${lang}/portal/soporte-technico/tickets`}>Close Details</Link>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {
                  ticketId === "2" ? (
                    <div className="col-span-2 flex flex-col gap-4">
                      <div>
                        <h3 className="font-bold text-sm">Development Ticket</h3>
                        <p>New Implementation - Front End</p>
                      </div>

                      <table className="border-separate border-spacing-2 border table-auto border-neutral-100/50">
                        <tbody>
                          <tr>
                            <td className="border border-white bg-neutral-100/50"><b>Due Date</b></td>
                            <td className="border border-white bg-neutral-100/50">05/24/2024</td>
                            <td className="border border-white bg-neutral-100/50"><b>Time Remaining</b></td>
                            <td className="border border-white bg-neutral-100/50"><b></b>3h:25 mins</td>
                          </tr>
                          <tr>
                            <td className="border border-white bg-neutral-100/50"><b>Page</b></td>
                            <td className="border border-white bg-neutral-100/50">Dashboard</td>
                            <td className="border border-white bg-neutral-100/50"><b>Component</b></td>
                            <td className="border border-white bg-neutral-100/50"><b></b>Aside</td>
                          </tr>
                        </tbody>
                      </table>
                      <div>
                        <h4 className="font-bold text-sm">Description</h4>
                        <p>
                          Generate Lorem Ipsum placeholder text for use in your graphic, print
                          and web layouts, and discover plugins for your favorite writing, design
                          and blogging tools.
                        </p>
                      </div>
                      <div className="overflow-hidden rounded-md h-48 [&>div]:h-[100%] [&>div]:w-full">
                        <Image
                          style={{ objectFit: "cover", height: "100%" }}
                          src="/assets/home/amenities/doble-room.jpg"
                          alt="doble room image"
                          className="rounded-md"
                        />
                      </div>
     
                    </div>
                   ) : null
                }

              </div>
            </Card>
            
          </div>
        </article>
      </section>
    </>
  );
}
