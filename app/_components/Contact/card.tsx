import {motion} from "framer-motion"
import { contacts } from "../data/data";
import { VarianType } from "../About/type";
import { ArrowUpRightIcon } from "../Icons";

export function ContactCard({containerVariants, itemVariants} : VarianType) {
    return (
        <motion.div
          className="space-y-4 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-black dark:hover:border-white transition-all duration-300"
                variants={itemVariants}
              >
                <div className="p-6 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 border border-neutral-200 dark:border-neutral-800 group-hover:border-black dark:group-hover:border-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-500 mb-1">
                        {contact.platform}
                      </p>
                      <p className="text-[15px] md:text-lg font-light text-black dark:text-white mb-1">
                        {contact.handle}
                      </p>
                      <p className="text-[13px] md:text-sm text-neutral-600 dark:text-neutral-400">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRightIcon className="w-5 h-5 text-black dark:text-white opacity-0 group-hover:opacity-100 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                </div>
              </motion.a>
            );
          })}
        </motion.div>
    )
}