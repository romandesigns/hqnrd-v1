import React from 'react';
import { Avatar, Button, Card, Image } from 'antd';
import { HiOutlineUser } from "@/app/ui/icons";
import Link from 'next/link';
import { Locale } from '@/i18n-config';
import { Ticket } from '@/types';
import moment from 'moment';
import { UpdateStatusBtn } from '@/app/ui/features';
import { format } from "@/utils/formatter/format";

export function TicketCard({ticketId, lang,ticket}:{ticketId:string, lang:Locale,ticket: Ticket}) {
  return (
    <div className='rounded-xs'>
      <Card className="[&_.ant-card-extra]:w-full" extra={
        <div className="p-3 px-1 flex gap-2 items-center justify-center">
          <UpdateStatusBtn ticketStatus="Begin"  ticketId={ticket.id}/>
          <UpdateStatusBtn ticketStatus="Done" ticketId={ticket.id}/>
          <UpdateStatusBtn ticketStatus="Cancel" ticketId={ticket.id}/>
        <Button className="ml-auto" size='small' type="default">History</Button>
      </div>
    } bordered={false}>
        <div className="grid grid-cols-[auto_1fr] grid-rows-1 gap-4">
          <div>
           <Avatar shape="square" size={120} icon={<HiOutlineUser />}/>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <div>
              <h2 className="text-lg font-bold">{ticket.title}</h2>
              <p className="space-x-4">
                <b>Created by: </b>
                Alipio Feliz 
                <b>Date: </b>
                {moment(ticket.created_at).format('MM/DD/YYYY')}</p>
            </div>

            <div className="flex items-center justify-start flex-1 w-full">
              <div className="w-full">
                <p><b>Assignee:</b> Roman Feliz</p>
                <div className="flex items-start justify-end gap-4">
                  <p><b>Priority:</b> {format.firstLetterToUpperCase(ticket.priority)}</p>
                  <p><b>Status:</b> {format.firstLetterToUpperCase(ticket.status)}</p>
                  <div className="ml-auto">
                    {
                      ticketId !== ticket.id ? <Link href={`/${lang}/portal/soporte-technico/tickets?ticketId=${ticket.id}`}>View Details</Link> :
                      ticketId === ticket.id && <Link href={`/${lang}/portal/soporte-technico/tickets`}>Close Details</Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
                  
          {
            ticketId === ticket.id  && (
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
             )
          }
        </div>
      </Card>
    </div>

  );
};

