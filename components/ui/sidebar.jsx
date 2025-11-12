"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, createContext, useContext, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import {
  CiGrid31,
  CiDatabase,
  CiGrid41,
  CiViewList,
  CiCalendar,
  CiPen,
  CiFileOn,
  CiSettings,
  CiLogout,
} from "react-icons/ci";
import { IoSchoolSharp } from "react-icons/io5";

// buat konteks untuk sidebar
const SidebarContext = createContext(undefined);

// fungsi hook untuk sidebar
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar harus digunakan dalam SidebarProvider");
  }
  return context;
};

// fungsi buat provider untuk sidebar
export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

// fungsi utama komponent sidebar
export const Sidebar = ({ children, open, setOpen, animate }) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

// fungsi untuk body sidebar
export const SidebarBody = (props) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...props} />
    </>
  );
};

// fungsi sidebar untuk tampilan desktop
export const DesktopSidebar = ({ className, children, ...props }) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <motion.div
      className={cn(
        "h-full px-4 py-4 hidden md:flex md:flex-col bg-neutral-100 dark:bg-neutral-800 w-[300px] shrink-0",
        className
      )}
      animate={{
        width: animate ? (open ? "300px" : "60px") : "300px",
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// fungsi sidebar untuk tampilan mobile
export const MobileSidebar = ({ className, children, ...props }) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "h-10 px-4 py-4 flex flex-col md:hidden items-center justify-between dark:bg-neutral-800"
        )}
        {...props}
      >
        <div className="absolute flex justify-start z-20">
          <Menu
            className="text-neutral-800 dark:text-neutral-200 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed h-full w-full inset-0 bg-white dark:bg-neutral-900 p-10 z-100 flex flex-col justify-between",
                className
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <X />
              </div>

              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

// fungsi untuk link sidebar
export const SidebarLink = ({ className, ...props }) => {
  const { open, animate } = useSidebar();
  const { data: session } = useSession(); // Ambil session

  const menuItems = useMemo(() => {
    // Definisikan struktur menu untuk admin
    const adminMenu = [
      { label: "Dashboard", href: "/dashboard", icon: <CiGrid31 size={30} /> },
      {
        label: "Input Absensi",
        icon: <CiPen size={30} />,
        subLinks: [
          { label: "Absen Harian Siswa", href: "/absensi/harian-siswa" },
          { label: "Absen Harian Guru", href: "/absensi/harian-guru" },
        ],
      },
      {
        label: "Master Data",
        icon: <CiDatabase size={30} />,
        subLinks: [
          { label: "Data Siswa", href: "/master/siswa" },
          { label: "Data Guru", href: "/master/guru" },
          { label: "Data Kelas", href: "/master/kelas" },
          { label: "Data Mata Pelajaran", href: "/master/mapel" },
          { label: "Data Jadwal", href: "/master/jadwal" },
          { label: "Data Piket", href: "/master/piket" },
        ],
      },
      {
        label: "Pengguna",
        icon: <CiSettings size={30} />,
        subLinks: [{ label: "Akun Pengguna", href: "/pengguna/akun" }],
      },
      {
        label: "Laporan",
        icon: <CiFileOn size={30} />,
        subLinks: [
          { label: "Rekap Harian", href: "/laporan/harian" },
          { label: "Rekap Bulanan", href: "/laporan/bulanan" },
        ],
      },
    ];

    // Definisikan struktur menu untuk guru piket
    const guruPiketMenu = [
      { label: "Dashboard", href: "/dashboard", icon: <CiGrid31 size={30} /> },
      {
        label: "Tugas Piket",
        icon: <CiPen size={30} />,
        subLinks: [
          { label: "Absen Harian Siswa", href: "/absensi/harian-siswa" },
          { label: "Absen Harian Guru", href: "/absensi/harian-guru" },
        ],
      },
      {
        label: "Tugas Mengajar",
        icon: <CiCalendar size={30} />,
        subLinks: [
          { label: "Input Absen Mapel", href: "/mengajar/absen-mapel" },
          { label: "Jadwal Saya", href: "/mengajar/jadwal" },
        ],
      },
    ];

    // Definisikan struktur menu untuk guru mapel
    const guruBiasaMenu = [
      { label: "Dashboard", href: "/dashboard", icon: <CiGrid31 size={30} /> },
      {
        label: "Tugas Mengajar",
        icon: <CiCalendar size={30} />,
        subLinks: [
          { label: "Input Absen Mapel", href: "/mengajar/absen-mapel" },
          { label: "Jadwal Saya", href: "/mengajar/jadwal" },
        ],
      },
    ];

    if (!session) {
      return []; // Menu kosong jika belum login
    }

    const userRole = session.user.role;
    const isPiket = session.user.isPiket;

    if (userRole === "ADMIN") {
      return adminMenu;
    } else if (userRole === "GURU" && isPiket) {
      return guruPiketMenu;
    } else if (userRole === "GURU" && !isPiket) {
      return guruBiasaMenu;
    } else {
      return [];
    }
  }, [session]);

  // Fungsi helper untuk render link biasa
  const renderLink = (link) => (
    <Link
      href={link.href}
      key={link.href}
      className={cn(
        "flex items-center text-neutral-900 dark:text-neutral-50 justify-start gap-2 group/sidebar py-2 rounded-sm",
        className
      )}
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className={`text-slate-900 dark:text-slate-50 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre inline-block p-0! m-0!`}
      >
        {link.label}
      </motion.span>
    </Link>
  );

  return (
    <div className="flex flex-col justify-between h-full">
      {/* Bagian Atas: Logo dan Menu */}
      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/* === Logo Aplikasi === */}
        <div
          className={cn(
            "flex items-center text-neutral-900 dark:text-neutral-50 justify-start gap-2 group/sidebar py-2  mb-4 border-b border-neutral-400 dark:border-neutral-700",
            className
          )}
        >
          <IoSchoolSharp size={30} className="text-emerald-700" />
          <motion.h1
            animate={{
              display: animate
                ? open
                  ? "inline-block"
                  : "none"
                : "inline-block",
              opacity: animate ? (open ? 1 : 0) : 1,
            }}
            className="text-emerald-700 dark:text-slate-50 text-xl font-bold whitespace-pre"
          >
            Absen Online
          </motion.h1>
        </div>

        {/* === Render Menu Dinamis === */}
        <div className="flex flex-col space-y-1">
          {menuItems.map((item) => {
            // Jika item adalah GRUP
            if (item.subLinks) {
              return (
                <div key={item.label}>
                  {/* Judul Grup (Dropdown) */}
                  <div
                    className={cn(
                      "flex items-center text-neutral-900 dark:text-neutral-50 justify-start gap-2 group/sidebar py-2",
                      "mt-2"
                    )}
                  >
                    {item.icon}
                    <motion.span
                      animate={{
                        display: animate
                          ? open
                            ? "inline-block"
                            : "none"
                          : "inline-block",
                        opacity: animate ? (open ? 1 : 0) : 1,
                      }}
                      className="text-neutral-500 dark:text-neutral-400 text-xs uppercase font-semibold whitespace-pre"
                    >
                      {item.label}
                    </motion.span>
                  </div>
                  {/* Sub-Link di dalam grup */}
                  <div className="flex flex-col pl-4 border-l-2 border-neutral-200 dark:border-neutral-700 ml-4">
                    {open && // Hanya tampilkan sub-link jika sidebar terbuka
                      item.subLinks.map((subLink) => (
                        <Link
                          href={subLink.href}
                          key={subLink.href}
                          className="flex items-center text-neutral-900 dark:text-neutral-50 py-1.5 group/sidebar rounded-sm"
                        >
                          <motion.span
                            animate={{
                              display: animate
                                ? open
                                  ? "inline-block"
                                  : "none"
                                : "inline-block",
                              opacity: animate ? (open ? 1 : 0) : 1,
                            }}
                            className="text-slate-900 dark:text-slate-50 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre"
                          >
                            {subLink.label}
                          </motion.span>
                        </Link>
                      ))}
                  </div>
                </div>
              );
            }

            // Jika item adalah LINK BIASA
            return renderLink(item);
          })}
        </div>
      </div>

      {/* Bagian Bawah: Info User dan Logout */}
      <div className="py-2 border-t border-neutral-400 dark:border-neutral-700">
        <div
          className="flex items-center text-red-500 justify-start gap-2 group/sidebar py-2 rounded-sm cursor-pointer"
          onClick={() => signOut({ callbackUrl: "/" })} // Fungsi logout
        >
          <CiLogout size={30} />
          <motion.span
            animate={{
              display: animate
                ? open
                  ? "inline-block"
                  : "none"
                : "inline-block",
              opacity: animate ? (open ? 1 : 0) : 1,
            }}
            className="text-red-500 text-sm group-hover/sidebar:translate-x-1 transition duration-150 whitespace-pre"
          >
            Logout
          </motion.span>
        </div>
      </div>
    </div>
  );
};
