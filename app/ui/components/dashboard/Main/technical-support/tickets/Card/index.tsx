import { UpdateStatusBtn } from '@/app/ui/features';
import { HiOutlineUser } from "@/app/ui/icons";
import { Locale } from '@/i18n-config';
import { Ticket } from '@/types';
import { format } from "@/utils/formatter/format";
import { UserMetadata } from '@supabase/supabase-js';
import { Avatar, Button, Card, Image } from 'antd';
import cn from 'classnames';
import moment from 'moment';
import Link from 'next/link';



export function TicketCard({id, lang,ticket, user}:{id:string, lang:Locale, ticket: Ticket, user:UserMetadata | undefined}) {

  return (
    <div className='rounded-xs'>
      <Card className="[&_.ant-card-extra]:w-full" extra={
        <div className="p-3 px-1 flex gap-2 items-center justify-start">
          <UpdateStatusBtn ticketStatus="Begin"  ticketId={ticket.id} className='border !border-primary-500/60 !bg-primary-500/20' />
          <UpdateStatusBtn ticketStatus="Done" ticketId={ticket.id} className='border !border-green-500/60 !bg-green-500/20' />
          {ticket.author_id === ticket.staff.author.id ? <Button className="ml-auto border !border-red-500/60 !bg-red-500/20" size='small' type="default">Delete</Button> : <div/>}
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
                {ticket.staff.author.name} {ticket.staff.author.last_name}
                <b>Date: </b>
                {moment(ticket.created_at).format('MM/DD/YYYY')}</p>
            </div>

            <div className="flex items-center justify-start flex-1 w-full">
              <div className="w-full">
                <p><b>Assignee:</b> {ticket.staff.assignee.name} {ticket.staff.assignee.last_name}</p>
                <div className="flex items-start justify-end gap-4">
                  <p><b>Priority:</b> {format.firstLetterToUpperCase(ticket.priority)}</p>
                  <p><b>Status:</b> <span className={cn("rounded-md border py-[0.15rem] px-3",{
                    // 'text-red-500': ticket.status === 'begin' ,
                    'text-green-500 border-green-500/60 bg-green-500/10': ticket.status === 'done' ,
                    'text-primary-500 border-primary-500/60 bg-primary-500/10': ticket.status === 'begin' ,
                    'text-neutral-700 border-black/60 bg-black/10': ticket.status === 'backlog' ,
                  })}>{format.firstLetterToUpperCase(ticket.status)}</span></p>
                  
                  <div className="ml-auto">
                    {
                      id !== ticket.id ? <Link href={`/${lang}/portal/soporte-technico/tickets?id=${ticket.id}`}>View Details</Link> :
                      id === ticket.id && <Link href={`/${lang}/portal/soporte-technico/tickets`}>Close Details</Link>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
                  
          {
            id === ticket.id  && (
              <div className="col-span-2 flex flex-col gap-4">
                <div>
                  <h3 className="font-bold text-sm">{format.firstLetterToUpperCase(ticket.issueType)} Ticket</h3>
                  <p>{format.firstLetterToUpperCase(ticket.developmentType)} - {format.firstLetterToUpperCase(ticket.implementationType)}</p>
                </div>

                <table className="border-separate border-spacing-2 border table-auto border-neutral-100">
                  <tbody>
                    <tr>
                      <td className="border border-white bg-neutral-100/50 px-2"><b>Due Date</b></td>
                      <td className="border border-white bg-neutral-100/50 px-2">{moment(ticket.dueDate).format('MM/DD/YYYY')}</td>
                      <td className="border border-white bg-neutral-100/50 px-2"><b>Time Remaining</b></td>
                      <td className="border border-white bg-neutral-100/50 px-2"><b></b>{format.getRemainingTime(ticket.dueDate)}</td>
                    </tr>
                    <tr>
                      <td className="border border-white bg-neutral-100/50 px-2"><b>Page</b></td>
                      <td className="border border-white bg-neutral-100/50 px-2">{format.firstLetterToUpperCase(ticket.pageLocation)}</td>
                      <td className="border border-white bg-neutral-100/50 px-2"><b>Component</b></td>
                      <td className="border border-white bg-neutral-100/50 px-2"><b></b>{format.firstLetterToUpperCase(ticket.pageComponent)}</td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <h4 className="font-bold text-sm">Description</h4>
                  <p>
                   {format.firstLetterToUpperCase(ticket.description)}
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

