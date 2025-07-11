"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@src/components/ui/card";
import { Badge } from "@src/components/ui/badge";
import { Button } from "@src/components/ui/button";
import { Avatar, AvatarFallback } from "@src/components/ui/avatar";

interface User {
  id: string;
  name: string;
  email: string;
  language: "en" | "el";
  status: "pending" | "approved" | "rejected";
  lyricsCount: number;
  songsCount: number;
}

interface LyricsSubmission {
  id: string;
  userId: string;
  title: string;
  content: string;
  language: "en" | "el";
  status: "pending" | "in_progress" | "completed";
  submittedAt: string;
  completedAt?: string;
}

interface Song {
  id: string;
  lyricsId: string;
  title: string;
  artist: string;
  duration: string;
  previewUrl: string;
  fullSongUrl: string;
  price: number;
  isPaid: boolean;
  downloadCount: number;
}

export default function MusicAdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "lyrics" | "songs" | "payments">("overview");
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "el">("en");

  // Mock data
  const users: User[] = [
    { id: "1", name: "Maria Papadopoulos", email: "maria@example.com", language: "el", status: "approved", lyricsCount: 5, songsCount: 3 },
    { id: "2", name: "John Smith", email: "john@example.com", language: "en", status: "pending", lyricsCount: 2, songsCount: 0 },
    { id: "3", name: "Elena Konstantinou", email: "elena@example.com", language: "el", status: "approved", lyricsCount: 8, songsCount: 6 },
  ];

  const lyricsSubmissions: LyricsSubmission[] = [
    { id: "1", userId: "1", title: "Το Τραγούδι της Αγάπης", content: "Στα βράχια της καρδιάς μου...", language: "el", status: "completed", submittedAt: "2024-01-15", completedAt: "2024-01-20" },
    { id: "2", userId: "2", title: "City Lights", content: "Walking through the neon streets...", language: "en", status: "in_progress", submittedAt: "2024-01-18" },
    { id: "3", userId: "3", title: "Η Μοναξιά", content: "Στο δωμάτιο μου μόνος...", language: "el", status: "pending", submittedAt: "2024-01-20" },
  ];

  const songs: Song[] = [
    { id: "1", lyricsId: "1", title: "Το Τραγούδι της Αγάπης", artist: "Maria Papadopoulos", duration: "3:45", previewUrl: "#", fullSongUrl: "#", price: 9.99, isPaid: true, downloadCount: 45 },
    { id: "2", lyricsId: "3", title: "Η Μοναξιά", artist: "Elena Konstantinou", duration: "4:12", previewUrl: "#", fullSongUrl: "#", price: 12.99, isPaid: false, downloadCount: 0 },
  ];

  const translations = {
    en: {
      title: "Music Admin Dashboard",
      overview: "Overview",
      users: "Users",
      lyrics: "Lyrics",
      songs: "Songs",
      payments: "Payments",
      totalUsers: "Total Users",
      pendingLyrics: "Pending Lyrics",
      completedSongs: "Completed Songs",
      totalRevenue: "Total Revenue",
      recentActivity: "Recent Activity",
      uploadLyrics: "Upload Lyrics",
      uploadSong: "Upload Song",
      preview: "Preview",
      download: "Download",
      approve: "Approve",
      reject: "Reject",
      edit: "Edit",
      delete: "Delete",
      status: "Status",
      language: "Language",
      submitted: "Submitted",
      completed: "Completed",
      inProgress: "In Progress",
      pending: "Pending",
      approved: "Approved",
      rejected: "Rejected",
    },
    el: {
      title: "Πίνακας Διαχείρισης Μουσικής",
      overview: "Επισκόπηση",
      users: "Χρήστες",
      lyrics: "Στίχοι",
      songs: "Τραγούδια",
      payments: "Πληρωμές",
      totalUsers: "Συνολικοί Χρήστες",
      pendingLyrics: "Εκκρεμείς Στίχοι",
      completedSongs: "Ολοκληρωμένα Τραγούδια",
      totalRevenue: "Συνολικά Έσοδα",
      recentActivity: "Πρόσφατη Δραστηριότητα",
      uploadLyrics: "Ανέβασμα Στίχων",
      uploadSong: "Ανέβασμα Τραγουδιού",
      preview: "Προεπισκόπηση",
      download: "Λήψη",
      approve: "Έγκριση",
      reject: "Απόρριψη",
      edit: "Επεξεργασία",
      delete: "Διαγραφή",
      status: "Κατάσταση",
      language: "Γλώσσα",
      submitted: "Υποβλήθηκε",
      completed: "Ολοκληρώθηκε",
      inProgress: "Σε Εξέλιξη",
      pending: "Εκκρεμεί",
      approved: "Εγκεκριμένο",
      rejected: "Απορρίφθηκε",
    }
  };

  const t = translations[currentLanguage];

  const getStatusBadge = (status: string) => {
    const statusColors = {
      pending: "bg-yellow-100 text-yellow-800",
      in_progress: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800",
    };
    return <Badge className={statusColors[status as keyof typeof statusColors]}>{t[status as keyof typeof t]}</Badge>;
  };

  const getLanguageBadge = (lang: string) => {
    return <Badge variant="outline">{lang === "en" ? "English" : "Ελληνικά"}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-gray-600">Bilingual lyricist platform management</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setCurrentLanguage("en")}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentLanguage === "en" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => setCurrentLanguage("el")}
                  className={`px-3 py-1 rounded-md text-sm font-medium ${
                    currentLanguage === "el" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600"
                  }`}
                >
                  EL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {["overview", "users", "lyrics", "songs", "payments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {t[tab as keyof typeof t]}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.totalUsers}</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{users.length}</div>
                  <p className="text-xs text-muted-foreground">+2 from last month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.pendingLyrics}</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{lyricsSubmissions.filter(l => l.status === "pending").length}</div>
                  <p className="text-xs text-muted-foreground">Awaiting review</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.completedSongs}</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{songs.length}</div>
                  <p className="text-xs text-muted-foreground">+1 this week</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{t.totalRevenue}</CardTitle>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">€{songs.reduce((sum, song) => sum + (song.isPaid ? song.price : 0), 0).toFixed(2)}</div>
                  <p className="text-xs text-muted-foreground">+€9.99 this month</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>{t.recentActivity}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lyricsSubmissions.slice(0, 3).map((lyrics) => (
                    <div key={lyrics.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Avatar>
                          <AvatarFallback>{users.find(u => u.id === lyrics.userId)?.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{lyrics.title}</p>
                          <p className="text-sm text-gray-600">{users.find(u => u.id === lyrics.userId)?.name}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getLanguageBadge(lyrics.language)}
                        {getStatusBadge(lyrics.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "users" && (
          <Card>
            <CardHeader>
              <CardTitle>{t.users}</CardTitle>
              <CardDescription>Manage registered lyricists</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getLanguageBadge(user.language)}
                      {getStatusBadge(user.status)}
                      <div className="text-sm text-gray-600">
                        {user.lyricsCount} lyrics, {user.songsCount} songs
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "lyrics" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{t.lyrics}</CardTitle>
                  <CardDescription>Review and manage lyrics submissions</CardDescription>
                </div>
                <Button>{t.uploadLyrics}</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {lyricsSubmissions.map((lyrics) => (
                  <div key={lyrics.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">{lyrics.title}</h3>
                        <p className="text-sm text-gray-600">{users.find(u => u.id === lyrics.userId)?.name}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getLanguageBadge(lyrics.language)}
                        {getStatusBadge(lyrics.status)}
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">{lyrics.content}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        {t.submitted}: {new Date(lyrics.submittedAt).toLocaleDateString()}
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">{t.preview}</Button>
                        {lyrics.status === "pending" && (
                          <>
                            <Button size="sm">{t.approve}</Button>
                            <Button variant="destructive" size="sm">{t.reject}</Button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "songs" && (
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>{t.songs}</CardTitle>
                  <CardDescription>Manage completed songs and audio files</CardDescription>
                </div>
                <Button>{t.uploadSong}</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {songs.map((song) => (
                  <div key={song.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-medium">{song.title}</h3>
                        <p className="text-sm text-gray-600">{song.artist}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{song.duration}</Badge>
                        <Badge variant={song.isPaid ? "default" : "secondary"}>
                          {song.isPaid ? "Paid" : "Unpaid"}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        €{song.price} • {song.downloadCount} downloads
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">{t.preview}</Button>
                        <Button size="sm">{t.download}</Button>
                        <Button variant="outline" size="sm">{t.edit}</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {activeTab === "payments" && (
          <Card>
            <CardHeader>
              <CardTitle>{t.payments}</CardTitle>
              <CardDescription>Track payment transactions and revenue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-gray-500">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <p className="mt-2">Payment tracking dashboard coming soon</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
