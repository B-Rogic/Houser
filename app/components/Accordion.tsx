import React, { CSSProperties, forwardRef } from 'react'
import { class_names } from '../libs/classnames'
import cn from '../libs/utils'

type Props = {
    num: number;
    title: string;
    textSize?: string;
    className?: string;
    style: CSSProperties;
    handleDrop: () => void;
}

const Accordion = forwardRef<HTMLDivElement, Props>((props, ref) => {
  return (
    <div ref={ref} onClick={props.handleDrop} className={cn(class_names.occupyThree, props.className, 'ms-auto mb-40')}>
        <div className="flex justify-between w-full bg-maingray p-3 items-center">
            <div className="flex gap-10">
                <p className="text-sm text-white">[00{props.num}]</p>
                <h5 className={cn('text-3xl font-bold uppercase text-white', props.textSize)}>{props.title}</h5>
            </div>
            <div className="flex gap-1 flex-wrap w-5">
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
                <div className='w-1 h-1 bg-white/30' />
            </div>
        </div>
        <div className="flex flex-col transition-height duration-500" style={props.style}>
            <p className="p-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, repellat quaerat? Deleniti architecto, unde atque nulla in, rerum aliquid praesentium corporis voluptatem earum magnam ipsum dignissimos. Recusandae maxime itaque pariatur nostrum dolorum omnis ratione fuga, quibusdam, assumenda distinctio doloribus architecto natus. Enim, iste quaerat expedita eum sit natus, molestias eligendi nisi veniam dolor sequi culpa aspernatur tempore nemo iusto libero in velit eos autem, soluta distinctio laborum non. Facilis praesentium vel laudantium hic dolorum, consequuntur voluptatem aliquid voluptates earum voluptatibus exercitationem eius sunt culpa labore corporis possimus? Commodi, porro illo facilis quisquam veniam praesentium doloremque modi odit quis esse nobis libero incidunt nostrum quia quo voluptate aspernatur repellendus ex, asperiores neque ducimus? Modi neque eius, architecto dolores minus magnam quas laboriosam dolor explicabo, dolorem consectetur voluptatem commodi labore atque alias exercitationem culpa, unde temporibus possimus? Consequatur adipisci laudantium tenetur cum pariatur repudiandae aliquid quaerat dolor fugiat quia placeat voluptatum consequuntur aliquam aspernatur praesentium, quisquam, libero itaque impedit fugit nulla voluptates harum. Recusandae ut ex porro omnis exercitationem deserunt nisi possimus dolore delectus fugit pariatur quia explicabo nostrum, odio rem molestiae nulla, doloribus quos. Temporibus, fuga ratione, optio sed pariatur mollitia, ipsa deserunt animi expedita nisi delectus veniam deleniti. Corporis, similique rem nam fuga minima porro dolorem velit quaerat sint sunt! Officia, quod iusto ipsam iure adipisci modi quia, omnis nihil laboriosam obcaecati deserunt fuga reprehenderit. Minus totam maxime ut veniam atque cumque? Repellendus ex, similique recusandae quas, cumque magni ipsam animi, totam harum assumenda libero itaque. Obcaecati culpa officia, unde possimus dolorem ea repellendus, dicta quae ipsam esse mollitia iste consequatur delectus voluptatibus id aliquid consequuntur alias assumenda dolorum excepturi! Molestiae quidem tempore est ullam beatae! Fugiat aperiam fuga quos optio alias illo, dolor eius nemo at accusantium quidem similique et ducimus? Dolor doloremque voluptatem reiciendis reprehenderit consequatur nisi error vero, nulla aliquam! Nihil corrupti asperiores odio aliquid nisi. Sapiente, vero enim quidem sit earum placeat odit, quis nemo odio iusto perferendis pariatur aut voluptatibus in ea recusandae aspernatur doloremque, reprehenderit nihil voluptates ipsam fuga. Recusandae similique, magni iusto delectus voluptatem doloribus. Nemo illum perferendis ab quas, non ipsam ea, ipsa rerum est laudantium blanditiis laboriosam totam perspiciatis labore. Voluptas, quos accusamus libero cum saepe asperiores sint laborum atque, repellat magni culpa sequi illum velit voluptatibus maxime voluptatum amet voluptatem ducimus impedit itaque ab labore dolorem perferendis. Exercitationem ipsa maiores cumque eaque, temporibus sapiente ducimus laudantium laboriosam sequi nam sunt voluptatem, iure ratione consequatur culpa doloremque quae facilis veniam explicabo! Aliquid nisi perferendis voluptatum, delectus debitis repellat, similique, beatae eius eaque dolorem rem ipsum earum. Excepturi, laboriosam. Vel, eius libero? Fuga, esse natus dolore impedit cum ex eligendi explicabo, voluptatibus eum facilis cumque maxime repudiandae ad eaque recusandae soluta aliquid. Earum esse temporibus alias dolorum ratione, itaque quis, facilis laborum doloribus omnis labore id architecto accusantium expedita ad nam nostrum? Laudantium possimus dicta minus. Sint non eos excepturi temporibus earum, illo dolor error nostrum exercitationem quaerat veritatis dolorem deserunt quasi quis odit! Ratione quisquam veritatis et magni adipisci. Quas, dicta?</p>
        </div>
    </div>
  )
})

export default Accordion