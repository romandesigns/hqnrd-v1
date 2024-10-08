export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          id: string
          name: string | null
          slug: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          slug?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      guests: {
        Row: {
          created_at: string
          dob: string | null
          email: string | null
          gender: string | null
          id: string
          last_name: string | null
          name: string | null
          phone: string | null
          phone_country: string | null
          role: string | null
        }
        Insert: {
          created_at?: string
          dob?: string | null
          email?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          name?: string | null
          phone?: string | null
          phone_country?: string | null
          role?: string | null
        }
        Update: {
          created_at?: string
          dob?: string | null
          email?: string | null
          gender?: string | null
          id?: string
          last_name?: string | null
          name?: string | null
          phone?: string | null
          phone_country?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guests_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      rooms: {
        Row: {
          amenities: Json | null
          bed_quantity: number
          category_id: string | null
          created_at: string | null
          features: Json | null
          id: string
          media_files: Json | null
          meta_description: string | null
          page_description: string | null
          price_per_night: number
          room_number: number
          square_feet: number
          title: string
          updated_at: string | null
        }
        Insert: {
          amenities?: Json | null
          bed_quantity: number
          category_id?: string | null
          created_at?: string | null
          features?: Json | null
          id?: string
          media_files?: Json | null
          meta_description?: string | null
          page_description?: string | null
          price_per_night: number
          room_number: number
          square_feet: number
          title: string
          updated_at?: string | null
        }
        Update: {
          amenities?: Json | null
          bed_quantity?: number
          category_id?: string | null
          created_at?: string | null
          features?: Json | null
          id?: string
          media_files?: Json | null
          meta_description?: string | null
          page_description?: string | null
          price_per_night?: number
          room_number?: number
          square_feet?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rooms_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      tickets: {
        Row: {
          assigned: boolean | null
          assignee_id: string | null
          assignee_name: string | null
          author_id: string | null
          author_name: string | null
          completion_date: string | null
          component: string | null
          created_at: string
          description: string | null
          dev_task: string | null
          due: string | null
          id: string
          page: string | null
          priority: string | null
          resolution: string | null
          started_date: string | null
          status: string | null
          ticket_duration: string | null
          title: string | null
          type: string | null
        }
        Insert: {
          assigned?: boolean | null
          assignee_id?: string | null
          assignee_name?: string | null
          author_id?: string | null
          author_name?: string | null
          completion_date?: string | null
          component?: string | null
          created_at?: string
          description?: string | null
          dev_task?: string | null
          due?: string | null
          id?: string
          page?: string | null
          priority?: string | null
          resolution?: string | null
          started_date?: string | null
          status?: string | null
          ticket_duration?: string | null
          title?: string | null
          type?: string | null
        }
        Update: {
          assigned?: boolean | null
          assignee_id?: string | null
          assignee_name?: string | null
          author_id?: string | null
          author_name?: string | null
          completion_date?: string | null
          component?: string | null
          created_at?: string
          description?: string | null
          dev_task?: string | null
          due?: string | null
          id?: string
          page?: string | null
          priority?: string | null
          resolution?: string | null
          started_date?: string | null
          status?: string | null
          ticket_duration?: string | null
          title?: string | null
          type?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
